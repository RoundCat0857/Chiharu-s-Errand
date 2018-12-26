enchant()

window.onload = function () {
  const core = new Core(320, 240)
  setPreload(core, ['scene/menu.png', 'texture/message.png', 'texture/interior1.png', 'texture/char_p03.png','texture/town.png'])
  core.fps = 10
  core.onload = function() {
    const menu = startMenu(core)
    core.currentScene.addChild(menu)
    const selector = menu.lastChild.lastChild
    core.addEventListener('keydown', function start(e) {
      if (e.keyCode === 13) {
        switch(selector.y) {
          case 54:
            removeEvent(core, 'keydown', 'start')
            chapter1(core)
            break
          case 72:
            console.log('続きから')
            break
          case 90:
            window.open('about:blank','_self').close()
            break
        }
      }
    })
  }
  core.start()
}

function startMenu(core) {
  const menu = new Scene()
  const menuBack = setSprite(core, '../image/scene/menu.png', 320, 240)
  const selector = menuSelector(core, {0: '初めから', 1: '続きから', 2: 'ゲームを終了'})
  selector.y = 75
  menu.addChild(menuBack)
  menu.addChild(selector)
  return menu
}

function menuSelector(core, object) {
  const group = new Scene()
  const sprite = new Sprite(320, 160)
  sprite.image = core.assets['../image/texture/message.png']
  sprite.scale(0.3, 0.5)
  group.addChild(sprite)
  for (let k in object) {
    const text = addText(object[k], 10, 54 + 18 * k)
    text.textAlign = "center"
    group.addChild(text)
  }
  const text = addText('▶︎　　　　　　　　　　　　　　　　　　◀︎', 10, 54)
  text.textAlign = "center"
  text.addEventListener('enterframe', function() {
    if (core.input.down) {
      if (this.y >= 90) {
        this.y = 54
      } else {
        this.y += 18
      }
    }
    if (core.input.up) {
      if (this.y <= 54) {
        this.y = 90
      } else {
        this.y -= 18
      }
    }
  })
  group.addChild(text)
  return group
}
