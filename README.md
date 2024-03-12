# workshop-task-2

URL: https://yjk2004.github.io/workshop-task-2-2-2/

### new item from p5.js documentation
- typography: I wanted to make a "stop" sign

stroke(0);
fill(255);
textAlign(CENTER, CENTER);
textSize(size / 2);
text('STOP', x + size, y + size / 2);

### function
- stopSign:

function stopSign() {
  let x = random(0, 300); 
  let y = random(0, 300); 
  let size = 40;

  strokeWeight(2.5);
  stroke(255);
  fill(255, 0, 0);
  rect(x, y, size * 2, size);

### setInterval
- error: I struggled so much to make this call. Since my function is different to example function that shown in workshop-2, it was very hard for me figure this out.
