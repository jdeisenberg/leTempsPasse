var Displayable = {
  
  posA: 0.0,
  p: undefined, // reference to planet
  age: 0,
  isDying: false,
  isDead: false,
  
  init(p, posA) {
    this.p = p;
    this.posA = posA;
  },
  
  display: function display() {    
    push();
      rotate(this.posA);
      translate(this.p.halfsize, 0);
      push();
        rotate(Math.PI/2);
        this.grow();
      pop();
    pop();
  }
  
}
