const Human = enchant.Class.create(enchant.Sprite, {
  initialize: function(core, name, imagePath, start, char, frame){
    enchant.Sprite.call(this, 24, 32);
    this.x = start.x
    this.y = start.y
    const image = new Surface(72, 128)
    image.draw(core.assets['../image/' + imagePath], (char%4) * 72, Math.floor(char / 4) * 128, 72, 128, 0, 0, 72, 128)
    this.image = image
    this.frame = frame
    this.walk = 1
  },
  walk: function(x, y){
    this.tl.clear();
    this.tl.repeat(function(){
      this.frame = this.age % 2 + 5;
    }, 30).and().moveTo(x, y, 30);
  }
})
