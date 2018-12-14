const Human = enchant.Class.create(enchant.Sprite, {
  initialize: function(core, name, image, start){
    enchant.Sprite.call(this, 24, 32);
    this.x = start.x * 16 + 12
    this.y = start.y * 16
    this.image = core.assets['../image/' + image];
    this.frame = 3;
  },
  walk: function(x, y){
    this.tl.clear();
    this.tl.repeat(function(){
      this.frame = this.age % 2 + 5;
    }, 30).and().moveTo(x, y, 30);
  }
})
