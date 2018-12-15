enchant()

function chapter1(core, stage) {
  const map1 = maps.chapter1
  const images = ['texture/interior1.png', 'texture/char_p03.png']
  const startScene = startChapter(1)
  if (!stage || stage === 'chiharuRoom') {
    const chiharuRoom = map1['chiharuRoom']
    const { start, next } = chiharuRoom
    const [map, forergoundMap] = setStage(core, chiharuRoom, images[0])
    const stage = new Scene()
    const chiharu = new Human(core, 'Chiharu', images[1], start, 1, 7)
    addChilds(stage, [map, forergoundMap, chiharu])
    core.pushScene(stage)

    walk(core, map, chiharu)
    keepMapCenter(core, stage, map, chiharu)
  }
}
