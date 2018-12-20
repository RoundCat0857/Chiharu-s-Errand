const Human = enchant.Class.create(enchant.Sprite, {
  initialize: function(core, name, imagePath, start, char, frame, direction){
    enchant.Sprite.call(this, 24, 32);
    this.x = start.x
    this.y = start.y
    this.vx = this.vy = 0
    const image = new Surface(72, 128)
    image.draw(core.assets['../image/' + imagePath], (char%4) * 72, Math.floor(char / 4) * 128, 72, 128, 0, 0, 72, 128)
    this.image = image
    this.frame = frame
    this.direction = direction || 2
    this.walk = 1
    this.isMoving = true
    this.addEventListener('enterframe', function move() {
      let eventNames = []
      if (this._listeners.enterframe) {
        eventNames = Object.values(this._listeners.enterframe).map((e) => {
          return e.name
        })
      }
      if(this.isMoving && (eventNames.includes('walk') || eventNames.includes('walkTo'))) {
        core.currentScene.firstChild.collisionData[this.y / 16 + 1][(this.x - 12) / 16 + 1] = 0
        this.moveBy(this.vx, this.vy)
        core.currentScene.firstChild.collisionData[this.y / 16 + 1][(this.x - 12) / 16 + 1] = 1
        this.frame = this.direction * 3 + this.walk
        if (!(core.frame % 3)) {
          this.walk += 1
          this.walk %= 3
        }
        this.vx = this.vy = 0
      }
      this.isMoving = false
    })
  },
  walking: function(core, map) {
    this.addEventListener('enterframe', function walk() {
      if(!this.isMoving) {
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
        } else {
          this.frame = this.direction * 3 + 1
          this.vx = this.vy = 0
        }
      }
    })
  },
  pause: function(eventName) {
    for (let e of this._listeners.enterframe) {
      if (e.name === eventName) {
        this.removeEventListener('enterframe', e)
      }
    }
  },
  walkTo: function(x, y) {
    return new Promise((resolve, reject) => {
      this.addEventListener('enterframe', function walkTo() {
        const { age } = this
        if (this.x === x && this.y === y) {
          this.frame = Math.floor(this.frame / 3) * 3 + 1
          this.pause('walkTo')
          resolve(true)
        } else {
          this.isMoving = true
          if (this.age % 2 === 0) {
            if (this.y !== y) {
              if (this.y < y) {
                this.direction = 2
                this.vy = 16
              } else if (this.y > y) {
                this.direction = 0
                this.vy = -16
              }
            } else {
              if (this.x < x) {
                this.direction = 1
                this.vx = 16
              } else if (this.x > x) {
                this.direction = 3
                this.vx = -16
              }
            }
          }
        }
      })
    })
  }
})
