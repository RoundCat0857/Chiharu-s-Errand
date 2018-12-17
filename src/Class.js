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
  walkTo: function(x, y) {
    if (this.y < y) {
      this.frame = 7
      this.moveTo(this.x, y)
    } else if (this.y > y) {
      this.frame = 1
      this.moveTo(this.x, y)
    }
    if (this.x < x) {
      this.frame = 4
      this.moveTo(x, this.y)
    } else if (this.x > x) {
      this.frame = 10
      this.moveTo(x, this.y)
    }
  }
})
