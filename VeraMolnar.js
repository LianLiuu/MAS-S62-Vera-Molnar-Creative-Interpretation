function setup() {
  createCanvas(500, 500);
  background('grey');
}

function draw() {
  background('white');
  //square(55,55,70);
  drawSquare(50,5,70,5,0);
  drawSquare(50,5,62,9,4);
  drawSquare(50,5,54,13,8);
  //drawSquare(50,5,60,9,9);
}

function drawSquare (initialXY, numShapes, squareSize, margin,smaller){
    for (i=0; i< numShapes;i++){
    for (j = 0; j < numShapes; j++){
      square(initialXY + margin*(i+1) + smaller*i +squareSize*i, initialXY + margin*(j+1) + smaller*j +squareSize*j,squareSize);
    }
  }
}