function setSprite(core, path, width, height) {
  const sprite = new Sprite(width, height)
  sprite.image = core.assets[path]
  return sprite
}

function setCommunication() {

}

function setSelector() {

}

function startChapter(n) {
  console.log('第' + n + '章 \n ~  ~ \n 的なオープニングカット')
}

function getImagePath(paths) {
  rawPaths = path.map((path) => {
    return '../../image/' + path
  })
  return rawPaths
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
