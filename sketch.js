function setup() {
  createCanvas(500, 500);
  background('grey');
}

function draw() {
  background('white');
  randomSeed(mouseX);
  noFill()
  // draw squares of decreasing size
  drawSquare(50,5,70,5,0);
  drawSquare(50,5,62,9,4);
  drawSquare(50,5,54,13,8);
  drawSquare(50,5,46,17,12);
  drawSquare(50,5,38,21,16);
  drawSquare(50,5,30,25,20);
  drawSquare(50,5,22,29,24);
  drawSquare(50,5,14,33,28);
  drawSquare(50,5,6,37,32);
}

function drawSquare (initialXY, numShapes, squareSize, margin,smaller){
  //draw 5 * 5 grid
    for (i=0; i< numShapes;i++){
    for (j = 0; j < numShapes; j++){
      //erase lines by noise
      if (noise(1) > random()){
        stroke('white');
        square(initialXY + margin*(i+1) + smaller*i +squareSize*i, initialXY + margin*(j+1) + smaller*j +squareSize*j,squareSize);
      }else{
        stroke('black');
        square(initialXY + margin*(i+1) + smaller*i +squareSize*i, initialXY + margin*(j+1) + smaller*j +squareSize*j,squareSize);
      }
    }
  }
}