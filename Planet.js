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
      if( (d.posA < -this.a - ( this.dieA + d.age * this.speed ) ) && !(d.isDying) ){
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
      this.displayables[i].display();
    }

    // draw ground
    ellipse(0, 0, this.halfsize << 1, this.halfsize << 1); // 1 left bit shifting = *2
    pop();
  },

  generate: function generate() {
    var n = frameCount * 0.05;
     if (frameCount % (40 * noise(n)) < 0.6) {
       // add an element
      var objType = int(noise(n * 0.5) * 5);
      switch (objType) {
        case 0:
          bobj = Object.create(Building);
          bobj.building(planet, -planet.a - planet.bornA);
          planet.addObject(bobj);
          break;
        case 1:
          cobj = Object.create(Cloud);
          cobj.cloud(planet, -planet.a - planet.bornA);
          planet.addObject(cobj);
          break;
        case 2:
          tobj = Object.create(Tree2);
          tobj.tree2(planet, -planet.a - planet.bornA);
          planet.addObject(tobj);
          break;
        case 3:
          eobj = Object.create(Eolienne);
          eobj.eolienne(planet, -planet.a - planet.bornA);
          planet.addObject(eobj);
          break;
        case 4:
          /* endpoint paranoia - does noise() give a number in [0,1] or [0, 1)? */
          break;
      }
     }
  }

}

