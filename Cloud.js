var Cloud = Object.create(Displayable);

Cloud.h = 0;
Cloud.thick = 0;
Cloud.balls = [];
Cloud.wind = .003;

Cloud.cloud = function cloud(p, posA) {
  this.init(p, posA);
  this.h = int(random(p.halfsize >> 2, p.halfsize >> 1));
  this.thick = this.h / 5;
  this.balls = []
  for (var i = 0; i < int(random(6)) + 3; i++) {
    this.balls.push({x: random(1.2), y: random(1.0)});
  }
  
  this.wind = random(-0.003, 0.003);
  };
  
Cloud.grow = function grow() {
    
    if ( this.isDying ) {
      this.age--;
    } 
    else {
      this.age++;
      this.posA -= this.wind;
    }
    
    if (this.age < 0) {
      this.isDead = true;
    }
    if (this.age > this.h) {
      this.age = this.h;
    }
    
    var gh = min (this.age * 3, this.h);
    var n = this.thick * gh / this.h;
    
    fill(0);
    push();
    translate(0 , -gh);
    fill(0);
    for (var i = 0; i < this.balls.length; i++){
      ellipse(this.balls[i].x * n, this.balls[i].y * n / 2, n, n);
    }
    
    noStroke();
    fill(255);
    for (var i = 0; i < this.balls.length; i++){
      ellipse(this.balls[i].x * n, this.balls[i].y * n / 2, n-2, n-2);
    }
    fill(0);
    pop();
  };
  

