var Building = Object.create(Displayable);

Building.h = 60;
Building.w = 30;
Building.windows = [];
Building.ww = 5;

Building.building = function building(p, posA) {
  this.init(p, posA);
  
  this.h = int(random(p.halfsize >> 3, p.halfsize >> 1));
  this.w = int(random(p.halfsize >> 4, p.halfsize / 6));
    
  this.ww = min(this.h, this.w) / 5; 
    
  this.windows = [];
    
  for (var i = 0; i < 9; i++) {
      this.windows.push (random(2) > 1)
  }
};
  
Building.grow = function grow() {
  if (this.isDying ) {
      this. age--;
  } else {
    this.age++;
  }
  
  var gh = this.h;  // temporary heigth
  var gh2 = this.ww; // windows width
  
  if (this.age < 30) {
    if (this.age < 0)
    {
      this.isDead = true;
    }
    if (this.age < 10)
    {
      gh = min(this.age, 10) * this.h / 10;
    }
    if (this.age < 30- this.ww) {
      gh2 = 0;
    } else {
      gh2= this.age - (30 - this.ww);
    }
  } else {
    this.age = 30;
  }
  
  strokeWeight(1);
  noStroke();
  rect(-this.w / 2, this.h / 10, this.w, -gh);
  fill(255);

  var dw = int(this.w / 7);
  var dh = int(-this.h / 7);
  
  for (var i = 0; i < this.windows.length; i++) {
    var x = i % 3;
    var y = int(i / 3);
    if (this.windows[i]) {
      rect(-this.w * 0.5 + dw * (1 + x * 2), this.ww + 1.5 * dh + y * 2 *dh, this.ww, -gh2);
    }
  }
  fill(0);
  
}
