function setPreload(core, list) {
  list.forEach((image) => {
    core.preload('../image/' + image)
  })
}

function setSprite(core, path, width, height) {
  const sprite = new Sprite(width, height)
  sprite.image = core.assets[path]
  return sprite
}

function setTextbox (core) {
  const sprite = setSprite(core, '../image/texture/message.png', 320, 160)
  sprite.y = 158
  sprite.scale(1.0, 0.5)
  return sprite
}

function addText(str, x, y, font, color) {
  const text = new Label(str)
  if (font) {
    text.font = font
  } else {
    text.font = "10px monospace"
  }
  if (color) {
    text.color = color
  } else {
    text.color = "rgb(255, 255, 255)"
  }
  text.x = x
  text.y = y
  return text
}

async function setCommunication(core, stage, comObj) {
  const communication = new Scene()
  const textbox = setTextbox(core)
  communication.addChild(textbox)
  let choice_ = 0
  for (let id in comObj) {
    const talk = comObj[id]
    const speaker = addText(talk.speaker, 60, textbox.y + 16 - core.currentScene.y)
    const text = addText(talk.text, 60, textbox.y + 32 - core.currentScene.y)
    addChilds(communication, [speaker, text])
    stage.addChild(communication)
    choice_ = await waitZ(core, talk.selection)
    removeChilds(communication, [speaker, text])
  }
  communication.removeChild(textbox)
  return choice_
}

function setSelector(core, obj) {
  return new Promise((resolve, reject) => {
    const selector = new Scene()
    const textbox = setTextbox(core)
    textbox.scale(0.2, 0.8)
    textbox.x = 128
    textbox.y = 94
    const childs = [textbox]
    const choiceY = textbox.y + 28 - core.currentScene.y
    for (let id in obj) {
      const choice = addText(obj[id], 150 + textbox.x, choiceY + (id - 1) * 24)
      childs.push(choice)
    }
    const mark = addText('▶︎', 134 + textbox.x, choiceY)
    mark.addEventListener('enterframe', function () {
      if (core.input.down) {
        if (this.y < choiceY + 24) {
          this.y += 24
        }
      }
      if (core.input.up) {
        if (this.y > choiceY) {
          this.y -= 24
        }
      }
    })
    childs.push(mark)
    addChilds(selector, childs)
    core.currentScene.addChild(selector)
    core.addEventListener('keydown', function select(key) {
      if (key.key === 'z' || key.key === ' ') {
        const select = (mark.y - choiceY) / 24 + 1
        removeChilds(selector, childs)
        removeEvent(core, 'keydown', 'select')
        resolve(select)
      }
    })
  })
}

function startChapter(n) {
  console.log('第' + n + '章 \n ~  ~ \n 的なオープニングカット')
}

function addChilds(stage, arr) {
  arr.forEach((obj) => {
    stage.addChild(obj)
  })
}

function removeChilds(stage, arr) {
  arr.forEach((obj) => {
    stage.removeChild(obj)
  })
}

function keepMapCenter(core, stage, map, player) {
  core.currentScene.addEventListener('enterframe', function(e) {
    var x = Math.min((core.width  - 32) / 2 - player.x, 0)
    var y = Math.min((core.height - 32) / 2 - player.y, 0)
    x = Math.max(core.width , x + map.width)  - map.width
    y = Math.max(core.height, y + map.height) - map.height
    stage.x = x
    stage.y = y
  })
}

function setStage(core, mapObj, image) {
  const { field, objects, collision } = mapObj
  const map = setMap(core, field, image)
  map.collisionData = JSON.parse(JSON.stringify(collision))
  const forergoundMap = setMap(core, objects, image)
  return [map, forergoundMap]
}

function setMap(core, mapArray, image) {
  const map = new Map(16,16)
  map.image = core.assets['../image/' + image]
  map.loadData(mapArray)
  return map
}

function waitZ (core, obj) {
  return new Promise(async (resolve, reject) => {
    if (obj) {
      const choice = await setSelector(core, obj)
      resolve(choice)
    } else {
      core.addEventListener('keydown', function next(key) {
        if (key.key === 'z' || key.key === ' ') {
          removeEvent(core, 'keydown', 'next')
          resolve(1)
        }
      })
    }
  })
}

function removeEvent(node, type, name) {
  for (let e of node._listeners[type]) {
    if (e.name === name) {
      node.removeEventListener(type, e)
    }
  }
}
