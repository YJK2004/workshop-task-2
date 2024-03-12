let counter = 0;
let countInterval = setInterval(stopSign, 1000);

function setup() {
  createCanvas(400, 400);
  background(0);
}

function stopSign() {
  let x = random(0, 300); 
  let y = random(0, 300); 
  let size = 40;

  strokeWeight(2.5);
  stroke(255);
  fill(255, 0, 0);
  rect(x, y, size * 2, size);

  stroke(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(size / 2);
  text('STOP', x + size, y + size / 2);

  counter++;
  if (counter > 5) {
    clearInterval(countInterval);
    counter = 0;
  }
}

function mousePressed(){
  countInterval = setInterval(stopSign, 1000);
}