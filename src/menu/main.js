enchant()

window.onload = function () {
  const core = new Core(320, 240)
  const images = ['scene/menu.png', 'texture/message.png']
  images.forEach((image) => {
    core.preload('../../image/' + image)
  })
  core.fps = 10
  core.onload = function() {
    startMenu(core)
  }
  core.start()
}
