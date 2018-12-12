enchant()

function chapter1(core, stage) {
  const map = maps.chapter1
  const images = ['texture/interior1.png']
  const startScene = startChapter(1)
  if (!stage || stage === 'chiharuRoom') {
    const chiharuRoom = setStage(core, map['chiharuRoom'], images[0])
    core.currentScene.addChild(chiharuRoom)
    core.pushScene(chiharuRoom)
  }
}
