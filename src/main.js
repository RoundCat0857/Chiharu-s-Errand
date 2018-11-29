enchant()

window.onload = function () {
  const core = new Core(320, 240)
  core.preload('../image/scene/menu.png', '../image/texture/message.png')
  core.fps = 10
  core.onload = function() {
    const stage = new Group()
    startMenu(core)
  }
  core.start()
}
