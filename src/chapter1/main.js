enchant()

let { carrot } = flags.chapter1
const { chiharuRoom, living } = maps.chapter1
const { firstTalk } = communications.chapter1
const images = ['texture/interior1.png', 'texture/char_p03.png']

function chapter1(core, stageName) {
  if (!stageName || stageName === 'chiharuRoom') {
    const { start, stairs } = chiharuRoom
    const [map, forergoundMap] = setStage(core, chiharuRoom, images[0])
    let chiharu = {}
    const { x, y } = stairs[2]
    if (!stageName) {
      const startScene = startChapter(1)
      chiharu = new Human(core, map, 'Chiharu', images[1], start, 1, 7)
      chiharu.walkTo(x, y)
    } else {
      chiharu = new Human(core, map, 'Chiharu', images[1], { x: x - 16, y: y }, 1, 7)
      chiharu.walking(core, map)
    }
    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu])
    core.pushScene(stage)
    moveMap(core, chiharu, 'living', stairs)
    keepMapCenter(core, stage, map, chiharu)
  } else if (stageName === 'living') {
    const { stairs, door } = living
    const [map, forergoundMap] = setStage(core, living, images[0])
    const { x, y } = stairs[1]
    const chiharu = new Human(core, map, 'Chiharu', images[1], { x: x + 16, y: y }, 1, 7)
    const mother = new Human(core, map, 'Mom', images[1], {x: 5 * 16 + 12, y: 5 * 16 }, 5, 7)

    const stage = new Scene()
    addChilds(stage, [map, forergoundMap, chiharu, mother])
    core.pushScene(stage)
    chiharu.walking(core, map)
    chiharu.addEventListener('enterframe', async function() {
      if (this.x === 9 * 16 + 12 && !carrot) {
        carrot = 1
        chiharu.pause('walk')
        await mother.walkTo(this.x - 16, this.y)
        const choice = await setCommunication(core, stage, firstTalk)
        if (choice === 1) {
          chiharu.walking(core, map)
        } else {
          window.open('about:blank','_self').close()
        }
      }
    })

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
