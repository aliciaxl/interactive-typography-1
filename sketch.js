
let font;
let graphic;
let points = [];

function preload() {
 font = loadFont('fonts/Poppins-Medium.ttf')
}

function setup() {
createCanvas(1200, 360);
frameRate();

graphic = createGraphics(1200, 360);
graphic.fill('white');
graphic.textSize(300);
graphic.textAlign(CENTER, CENTER);
graphic.textFont(font);
graphic.text("axl", 600, 150);

}

function draw() {
  background('black');

  const tileSize = 30;

  for (let i=0; i<12; i++){

    let position = winMouseX / windowWidth;

    function easeInOutQuint(x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
      }
  
    position = easeInOutQuint(position);

    // const distortion = sin(frameCount/400 * 0.05 + i) * 50; //sin value oscillates between -1 and 1

    const sx = 0;
    const sy = i * tileSize * position;
    const sw = 1200;
    const sh = tileSize * position + (600 - tileSize) * (1 - position);

    const dx = 0;
    const dy = i * tileSize;
    const dw = 1200;
    const dh = tileSize;

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
  }

}