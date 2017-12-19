var planet = {

  x: 0,
  y: 0,                         // center of the planet 
  a: 0.0,                       // angle of the planet
  speed: -Math.PI/500,               // angle speed
  halfsize: 0,                  // radius of the sphere
  displayables: [],             // all the elements populating the planet
  bornA: Math.PI/5,                  // angle where elements are generated
  dieA: 4 * Math.PI / 5,                // angle where elements are deleted

  init: function init(x, y, h) {
    this.x = x;
    this.y = y;
    this.halfsize = h;
    displayables = [];
  },

  // rotate the planet
  turn: function turn() {
    this.a += this.speed;
    if (this.a > 2 * Math.PI) this.a -= 2 * Math.PI;
    var i = 0;
    // check for end of life elements
    while (i < this.displayables.length) {
      d = this.displayables[i];

      // Checks if it's alive and passing the dying point
      if( (d.posA < -this.a - ( this.dieA + d.age*speed ) ) && !(d.isDying) ){
        d.isDying = true;
      }

      // if dead remove it
      if (d.isDead) {
        this.displayables.splice(i, 1);
      }
      else {
        i++;
      }
    }

  },

  // add an element
  addObject: function addObject(dispObject) {
    this.displayables.push(dispObject);  // method of the ArrayList
  },

  clean: function clean() {
    this.displayables = [];
  },
  
  // draw the whole planet to the window  
  display: function display() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    stroke(0); 
    fill(0);

    // draw elements 
    for (var i=0; i < this.displayables.length; i++) {
      this.displayable[i].display();
    }

    // draw ground
    ellipse(0, 0, this.halfsize << 1, this.halfsize << 1); // 1 left bit shifting = *2
    pop();
  },

  generate: function generate() {
    var n = frameCount * 0.05;
     if (frameCount % (40 * noise(n)) < 1 ) {
//       // add an element
//       switch (int(noise(n * 0.5) * 4) ) {
//       case 0:
//         planet.addObject(new Building(planet, -planet.a-bornA));
//         break;
//       case 1:
//         planet.addObject(new Cloud(planet, -planet.a-bornA));
//         break;
//       case 2:
//         planet.addObject(new Tree2(planet, -planet.a-bornA));
//         break;
//       case 3:
//         planet.addObject(new Eolienne(planet, -planet.a-bornA ));
//         break;    
//       }
     }
  }

}

