enchant()

function chapter1(core, stageName) {
  const map1 = maps.chapter1
  const images = ['texture/interior1.png', 'texture/char_p03.png']
  const startScene = startChapter(1)
  if (!stageName || stageName === 'chiharuRoom') {
    const chiharuRoom = map1['chiharuRoom']
    const { start, stairs } = chiharuRoom
    const [map, forergoundMap] = setStage(core, chiharuRoom, images[0])
    const chiharu = new Human(core, 'Chiharu', images[1], start, 1, 7)
    if (stageName === 'chiharuRoom') {
      chiharu.x = 11 * 16 + 12
      chiharu.y = 10 * 16
    }
    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu])
    core.pushScene(stage)

    walk(core, map, chiharu)
    chiharu.addEventListener('enterframe', function () {
      if (this.x === stairs[1].x && (this.y === stairs[1].y || this.y === stairs[2].y)) {
        chapter1(core, 'living')
      }
    })
    keepMapCenter(core, stage, map, chiharu)
  } else if (stageName === 'living') {
    const living = map1['living']
    const { stairs, door } = living
    const [map, forergoundMap] = setStage(core, living, images[0])
    const chiharu = new Human(core, 'Chiharu', images[1], stairs[1], 1, 7)
    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu])
    core.pushScene(stage)

    walk(core, map, chiharu)
  }
}
