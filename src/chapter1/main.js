enchant()

window.onload = function () {
  const core = new Core(320, 240)
  core.preload('../../image/scene/menu.png', '../../image/texture/message.png')
  core.fps = 10
  core.onload = function() {
    startChapter(1)
    
  }
  core.start()
}
