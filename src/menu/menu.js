function startMenu(core) {
  const menu = new Group()
  const menuBack = setSprite(core, '../image/scene/menu.png', 320, 240)
  const option = select['menu']
  const selector = menuSelector(core, option)
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
    const text = new Label(object[k].text)
    text.font  = "12px"
    text.color = "rgb(255, 255, 255)"
    text.textAlign = "center"
    text.x = 10
    text.y = 56 + 18 * k
    group.addChild(text)
  }
  return group
}
