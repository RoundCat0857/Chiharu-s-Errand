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

function setCommunication() {

}

function setSelector() {

}

function startChapter(n) {
  console.log('第' + n + '章 \n ~  ~ \n 的なオープニングカット')
}

function addChilds(stage, arr) {
  arr.forEach((obj) => {
    stage.addChild(obj)
  })
}

function keepMapCenter(core, stage, map, player) {
  core.currentScene.addEventListener('enterframe', function(e) {
    var x = Math.min((core.width  - 32) / 2 - player.x, 0) // playerの位置がマップ半分まで到達？
    var y = Math.min((core.height - 32) / 2 - player.y, 0)
    x = Math.max(core.width , x + map.width)  - map.width // playerの位置がマップ右端まで到達？
    y = Math.max(core.height, y + map.height) - map.height
    stage.x = x // stageの座標をセット
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
