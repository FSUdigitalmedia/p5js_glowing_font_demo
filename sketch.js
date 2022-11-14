let div;

function setup() {
  createCanvas(400, 400);
  textSize(100);
  div = createDiv('this');
  div.class('neonText');
}

function draw() {
  background(125);
  div.position(mouseX, mouseY);

  //  text("this",20,100);

}

function mouseClicked() {
  div.class('glow');
}