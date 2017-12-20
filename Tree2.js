var Tree2 = Object.create(Displayable)
  
Tree2.h = 0;
Tree2.thick = 1;
Tree2.theta = 0.5;

Tree2.tree2 = function tree2(p, posA) {
  this.init(p, posA);
  this.h = Math.floor(random(p.halfsize >> 5, p.halfsize / 6))
  this.theta = random(.1, .8)
  };
  
Tree2.grow = function grow() {
    if (this.isDying) {
      this.age--;
    } 
    else {
      this.age++;
    }

    if (this.age < 0){
      this.isDead = true;
    }
    if (this.age > 60) {
      this.age = 60;
    }

    var gh = min(this.age, this.h);

    noStroke();
    fill(0);
    var thick = max(gh / 6, 1.0); 
    this.drawBranch(thick, gh);
    translate(0, -gh);
    this.branch(gh, this.theta);
  };

Tree2.branch = function branch(hi, theta) {
    hi *= 0.6;

    var thick = max(hi / 6, 1.0); 
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (hi > 2) {

      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      this.drawBranch(thick, int(hi));  // Draw the branch
      translate(0, -hi); // Move to the end of the branch
      this.branch(hi, theta);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state



      thick = max(hi / 6, 1.0);   
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta);
      this.drawBranch(thick, int(hi));
      translate(0,-hi);
      this.branch(hi, theta);
      pop();

    }
  };

Tree2.drawBranch = function drawBranch(t, h){
  beginShape();
  vertex(-t, 1);
  vertex( t, 1);
  vertex( t*.5, -h);
  vertex(-t*.5, -h);
  endShape(CLOSE);
};

