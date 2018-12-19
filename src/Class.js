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
    this.addEventListener('enterframe', function() {
      const { age } = this
      if (this.age % 2 === 0) {
        if (this.y !== y) {
          if (this.y < y) {
            this.frame = 6 + age % 3
            this.moveBy(0, 16)
          } else if (this.y > y) {
            this.frame = 2 + age % 3
            this.moveBy(0, -16)
          }
        } else {
          if (this.x < x) {
            this.frame = 3 + age % 3
            this.moveBy(16, 0)
          } else if (this.x > x) {
            this.frame = 9 + age % 3
            this.moveBy(-16, 0)
          }
        }
      }
      if (this.x === x && this.y === y) {
        this.frame = Math.floor(this.frame / 3) * 3 + 1
        this.clearEventListener('enterframe')
      }
    })
  }
})
