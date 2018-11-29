function startMenu(core) {
  const menu = new Group()
  const menuBack = setSprite(core, '../image/scene/menu.png', 320, 240)
  const selector = menuSelector(core, {1:'初めから', 2:'続きから', 3:'ゲームを終了'})
  selector.y = 75
  menu.addChild(menuBack)
  menu.addChild(selector)
  core.currentScene.addChild(menu)
}

function menuSelector(core, object) {
  const group = new Group()
  const sprite = new Sprite(320, 160)
  sprite.image = core.assets['../image/texture/message.png']
  sprite.scale(0.3, 0.5)
  group.addChild(sprite)
  for (let k in object) {
    const text = new Label(object[k])
    text.font  = "12px"
    text.color = "rgb(255, 255, 255)"
    text.textAlign = "center"
    text.x = 10
    text.y = 40 + 18 * k
    group.addChild(text)
  }
  return group
}
