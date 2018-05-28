
var value = 0;var system;

function setup()
{
    createCanvas(1445,800);
    system = new ParticleSystem(createVector(width/3,50,50));
}


function draw() {
  background(244, 248, 252);
if(mouseIsPressed){
  ellipse(mouseX, mouseY, 120, 120);
  system.addParticle();
  system.run();
}
// else{
//   system.mouseMoved();
//     system.run();
// }
}
function mouseMoved() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  system.addParticle();
  system.run();
  // return false;
}

var Particle = function(position) {
  this.acceleration = createVector(0, 0.05,0);
  // fill('red');
  this.velocity = createVector(random(-1, 1), random(-1, 0), random(0, 1));
  this.position = position.copy();
  this.lifespan = 500;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

// Method to display
Particle.prototype.display = function() {
  stroke(255, this.lifespan);
  strokeWeight(4);
  fill(127, this.lifespan);
  ellipse(130, this.position.y, 10, 10);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  ellipse(mouseX, mouseY, 120, 120);
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
