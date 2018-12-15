function setPreload(core, list) {
  list.forEach((image) => {
    core.preload('../image/' + image)
  })
}

function setSprite(core, path, width, height) {
  const sprite = new Sprite(width, height)
  sprite.image = core.assets[path]
  return sprite
}

function addText(str, x, y, font, color) {
  const text = new Label(str)
  if (font) {
    text.font = font
  } else {
    text.font = "10px monospace"
  }
  if (color) {
    text.color = color
  } else {
    text.color = "rgb(255, 255, 255)"
  }
  text.x = x
  text.y = y
  return text
}

function setCommunication() {

}

function setSelector() {

}

function startChapter(n) {
  console.log('第' + n + '章 \n ~  ~ \n 的なオープニングカット')
}

function setStage(core, mapObj, image) {
  const { field, objects, collision } = mapObj
  const map = setMap(core, field, image)
  map.collisionData = collision
  const forergoundMap = setMap(core, objects, image)
  return [map, forergoundMap]
}

function setMap(core, mapArray, image) {
  const map = new Map(16,16)
  map.image = core.assets['../image/' + image]
  map.loadData(mapArray)
  return map
}

function walk(core, map, human) {
  human.addEventListener('enterframe', function () {
    console.log(this.isMoving);
    if(this.isMoving) {
      this.moveBy(this.vx, this.vy)
      if (!(core.frame % 3)) {
        this.walk += 1
        this.walk %= 3
      }
      this.frame = this.direction * 3 + this.walk
      this.isMoving = false
    } else {
      this.walk = 1
      this.vx = this.vy = 0
      if (core.input.left) {
        this.direction = 3;
        this.vx = -16;
      } else if (core.input.right) {
        this.direction = 1;
        this.vx = 16;
      } else if (core.input.up) {
        this.direction = 0;
        this.vy = -16;
      } else if (core.input.down) {
        this.direction = 2;
        this.vy = 16;
      }
      const x = this.x + this.vx + 16;
      const y = this.y + this.vy + 16;
      if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y) && (this.vx || this.vy)) {
        this.isMoving = true
        arguments.callee.call(this)
      }
    }
  })
}
/*
function setBackGroundImage(core,stage,args){
  const backImage = new Sprite(256, 48);
  backImage.image = core.assets[args];
  //backImage.scale(0.5,0.5)
  const {x,y} = stage
  backImage.x = 0 - x;
  backImage.y = 144 - y;
  stage.addChild(backImage);
}

function setChoiceScene(stage,object){
  //選択肢１
  const {x,y} = stage
  for (let k in object) {
    const text = new Label(object[k]);
    text.font  = "8px";
    text.color = "rgb(255, 255, 255)";
    text.y = 152 + 10 * k - y;
    text.x = 10 - x;
    text.width = 246;
    text.height = 8;
    stage.addChild(text);
  }
}

function awaitForKeydown(document) {
  return new Promise((resolve, reject) => {
    document.addEventListener('keydown', resolve)
    if (!resolve) {
      resolve()
    }
  })
}
*/
