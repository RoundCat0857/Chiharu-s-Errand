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
  const text = new Label('▶︎　　　　　　　◀︎')
  text.font  = "12px"
  text.color = "rgb(255, 255, 255)"
  text.textAlign = "center"
  text.x = 10
  text.y = 56
  text.addEventListener('enterframe', function() {
    if (core.input.down) {
      if (text.y >= 92) {
        text.y = 56
      } else {
        text.y += 18
      }
    }
    if (core.input.up) {
      if (text.y <= 56) {
        text.y = 92
      } else {
        text.y -= 18
      }
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      switch(text.y) {
        case 56:
          console.log('初めから')
          break
        case 74:
          console.log('続きから')
          break
        case 92:
          window.open('about:blank','_self').close()
          break
      }
    }
  })
  group.addChild(text)
  return group
}
