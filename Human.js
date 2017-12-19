var human =  {
  age: 0,
  h: 0,
  x: 0,
  y: 0,
  
  init: function init(xx, yy,hh) {
    this.age = 0;
    this.h = hh;
    this.x = xx;
    this.y = yy;
  },

  display: function display() {
    this.age++;
    this.drawMan(this.x, this.y, this.h, map((this.age % 11), 0, 11, -.5, .5)); 
  },

  drawMan: function drawMan(x, y, s, ang) {
    noStroke();
    fill(0);
    var m = s / 8; // mesure
    push();
    translate(this.x, this.y);
    rotate(Math.PI / 2);
    translate(-.9 * this.h + abs(ang) * 1.5 * m, 0);
    ellipse(0, 0, m * 1.2, m * 1.2); // head
    translate(m * .75, 0);
    rect( 0, m / 4, 2.5 * m, -m / 2);
    // left arm
    this.arm(m, ang);
    // right arm
    this.arm(m, -ang);

    translate(2.5 * m, 0);
    // left leg
    this.leg(m, ang);
    // right leg
    this.leg(m, -ang);

    pop();
  },

  arm: function arm(m, ang) {
    push();
    rotate(.8 * ang);
    rect( 0, m / 4, 2 * m, -m / 2);
    translate(2 * m, 0);
    rotate(-abs(ang) * 2);
    rect( 0, m / 4, 2 * m, -m / 2);
    pop();
  },

  leg: function leg(m, ang) {
    push();
    rotate(-.05 - 1.2 * ang);
    rect( 0, m / 4, 2 * m, -m / 2);
    translate(2 * m, 0);
    if (ang > 0) rotate(1.4 * ang);
    if (ang < 0) rotate(-.2 * ang);
    rect( 0, m / 4, 2 * m, -m / 2);
    pop();
  }

}

