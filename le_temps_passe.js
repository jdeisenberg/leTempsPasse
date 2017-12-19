/*
title: leTempsPasse
date: 2009-09-19
by: Juego & antiplastik
 
what:
  a fork of "choose your planet" by antiplastik, 
  licensed under Creative Commons Attribution-Share Alike 3.0 license.
  Work: http://openprocessing.org/visuals/?visualID=3672
  License: http://creativecommons.org/licenses/by-sa/3.0/
*/

// Planet planet;
// Human hum;

var auto = true;

function setup() {
  
  var theCanvas = createCanvas(720, 400);
  theCanvas.parent('le_temps_passe') 
  frameRate(20);
  smooth();
  
  planet.init(360, 500, 320);
  human.init(planet.x, planet.y - planet.halfsize, planet.halfsize / 8);
  
  // Button setup
  // int w2 = width/2;
  // int h2 = height-55;
  
}

function draw() {
  
  planet.turn();
 
  // draw to the screen
  background(255);
  planet.display();
  human.display();
  noLoop(); 
  // if (auto) planet.generate();
  
}

// function keyPressed() {
//   if (key == 'b') {
//     planet.addObject(new Building(planet, -planet.a-planet.bornA));
//     auto = false;
//   }
//   if (key == 'c') {
//     planet.addObject(new Cloud(planet, -planet.a-planet.bornA));
//     auto = false;
//   }
//   if (key == 't') {
//     planet.addObject(new Tree2(planet, -planet.a-planet.bornA));
//     auto = false;
//   }
//   if (key == 'w') {
//     planet.addObject(new Eolienne(planet, -planet.a-planet.bornA));
//     auto = false;
//   }
//   if (key == ' ') {
//     auto = true;
//   }
// }

/**
<h3>leTempsPasse</h3>
<h4>howTo:</h4>
<li>press '&nbsp;' for Auto-generation
<li>press 'b' for Building
<li>press 'c' for Cloud
<li>press 't' for Tree
<li>press 'w' for Wind turbine
*/
