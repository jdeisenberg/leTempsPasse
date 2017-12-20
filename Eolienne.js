var Eolienne = Object.create(Displayable);

Eolienne.h = 30;
Eolienne.w = 7;
Eolienne.angle = 0;
Eolienne.aSpeed = Math.PI / 20;

Eolienne.eolienne = function eolienne(p, posA) {
  this.init(p, posA);
  this.h = p.halfsize >> 2;
}

Eolienne.grow = function grow() {
    if (this.isDying) {
      this.age--;
    } else {
    this.age++;
    }
    
    var gh = this.h;
    var gh2 = this.h / 2;

    if (this.age < 40) {
      if (this.age < 0) {
        this.isDead = true;
      }
      if (this.age < 10) {
        gh = min(this.age, 10) * this.h / 10;
      }
      gh2 = 0;
      if (this.age > 20) {
        gh2 = (min(this.age, 30) - 20) * this.h / 20;
      }
    } else {
      this.age = 40;
      this.angle += this.aSpeed;
      if (this.angle > 2 * Math.PI) {
        this.angle -= 2 * Math.PI;
      }
    }
    stroke(0);
    triangle(-this.w / 2, 0, this.w / 2, 0, 0, -gh);
    if (this.age > 10) {  
      push();
      translate(0, -gh);
      for (var i = 0; i < 3; i++) {
        push();
        rotate(this.angle + 2 * Math.PI * i / 3);
        triangle(-this.w / 2, 0, this.w / 3, 0, 0, -gh2);
        pop();
      }
      pop();
    }
    
  };
  
