enchant()
// document.write("<script type='text/javascript' src='./menu/menu.js'></script>")

function chapter1(core, stage) {
  const map = maps.chapter1
  const images = ['texture/interior1.png']
  // core.load('../image/' + images[0])
  // setPreload(core, images)
  const startScene = startChapter(1)
  // core.currentScene(startScene)
  if (!stage || stage === 'chiharuRoom') {
    const chiharuRoom = setMap(core, map['chiharuRoom'], images[0])
    const stage = new Scene()
    stage.addChild(chiharuRoom)
    core.currentScene.addChild(stage)
    core.pushScene(stage)
  }
}
