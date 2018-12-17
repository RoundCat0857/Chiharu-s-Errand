enchant()

const flag1 = flags.chapter1
const map1 = maps.chapter1
const images = ['texture/interior1.png', 'texture/char_p03.png']

function chapter1(core, stageName) {
  if (!stageName || stageName === 'chiharuRoom') {
    const chiharuRoom = map1['chiharuRoom']
    const { start, stairs } = chiharuRoom
    const [map, forergoundMap] = setStage(core, chiharuRoom, images[0])
    let chiharu = {}
    if (!stageName) {
      const startScene = startChapter(1)
      chiharu = new Human(core, 'Chiharu', images[1], start, 1, 7)
    } else {
      const { x, y } = stairs[2]
      chiharu = new Human(core, 'Chiharu', images[1], { x: x - 16, y: y }, 1, 7)
    }
    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu])
    core.pushScene(stage)

    walk(core, map, chiharu)
    moveMap(core, chiharu, 'living', stairs)
    keepMapCenter(core, stage, map, chiharu)
  } else if (stageName === 'living') {
    const living = map1['living']
    const { stairs, door } = living
    const [map, forergoundMap] = setStage(core, living, images[0])
    const { x, y } = stairs[1]
    const chiharu = new Human(core, 'Chiharu', images[1], { x: x + 16, y: y }, 1, 7)
    const mother = new Human(core, 'Mom', images[1], {x: 5 * 16 + 12, y: 5 * 16 }, 5, 7)
    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu, mother])
    core.pushScene(stage)

    walk(core, map, chiharu)
    if (!flag1.carrot) {
      chiharu.addEventListener('enterframe', function () {
        if (this.x === 9 * 16 + 12) {
          mother.walkTo(this.x - 16, this.y)
          this.clearEventListener('enterframe')
          walk(core, map, chiharu)
          moveMap(core, chiharu, 'chiharuRoom', stairs)
          flag1.carrot = 1
        }
      })
    }
    moveMap(core, chiharu, 'chiharuRoom', stairs)
    keepMapCenter(core, stage, map, chiharu)
  }
}

function moveMap(core, chiharu, mapName, start) {
  chiharu.addEventListener('enterframe', function () {
    if (this.x === start[1].x && (this.y === start[1].y || this.y === start[2].y)) {
      chapter1(core, mapName)
    }
  })
}
