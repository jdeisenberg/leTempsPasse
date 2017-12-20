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
//  noLoop(); 
  if (auto) planet.generate();
  
}

function keyTyped() {
   if (key == 'b') {
     bobj = Object.create(Building);
     bobj.building(planet, -planet.a - planet.bornA);
     planet.addObject(bobj);
     auto = false;
   }     
   if (key == 'c') {
     cobj = Object.create(Cloud);
     cobj.cloud(planet, -planet.a - planet.bornA);
     planet.addObject(cobj);
     auto = false;
   }
   if (key == 't') {
     tobj = Object.create(Tree2);
     tobj.tree2(planet, -planet.a - planet.bornA);
     planet.addObject(tobj);
     auto = false;
   }
   if (key == 'w') {
     eobj = Object.create(Eolienne);
     eobj.eolienne(planet, -planet.a - planet.bornA);
     planet.addObject(eobj);
     auto = false;
   }
   if (key == ' ') {
     auto = true;
   }
 }

/**
<h3>leTempsPasse</h3>
<h4>howTo:</h4>
<li>press '&nbsp;' for Auto-generation
<li>press 'b' for Building
<li>press 'c' for Cloud
<li>press 't' for Tree
<li>press 'w' for Wind turbine
*/
