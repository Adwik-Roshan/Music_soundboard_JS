let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let fast_rocket;
let fut_bass;
let flute;
let buzz_in;
let handgun;
let bell;
let pop_click;
let heavy_slide;
let piano_fall;

class Button {
  constructor(x, y, w, h, color, accent, sound) {
    this.x = x; // x - the x coordinate of the button.
    this.y = y; // y - the y coordinate of the button.
    this.w = w; // w - the width of the button.
    this.h = h; // h - height of the button.
    this.color = color; // color - the body color of the button.
    this.accent = accent; // accent - the accent color of the button.
    this.sound = sound; // sound - the sound that the button will play.
  }
  show() {
    noStroke();

    fill(this.color);
    rect((this.x-100), this.y, this.w, this.h);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc((this.x), this.y+60, this.w, this.h, TWO_PI, PI);
  }
}

function setup() {
  // put setup code here
  canvas = createCanvas(width, height);

  fast_rocket = loadSound('mixkit-fast-rocket-whoosh-1714.wav');
  fut_bass = loadSound("mixkit-futuristic-bass-hit-2303.wav");
  flute = loadSound("mixkit-game-flute-bonus-2313.wav");
  handgun = loadSound("mixkit-handgun-click-1660.mp3");
  bell = loadSound("mixkit-happy-bell-alert-601.wav");
  pop_click = loadSound("mixkit-hard-pop-click-2364.wav");
  heavy_slide = loadSound("mixkit-heavy-sliding-door-1523.wav");
  piano_fall = loadSound("mixkit-piano-falling-effect-408.wav");
  buzz_in = loadSound("mixkit-game-show-buzz-in-3090.wav");

  let b1 = new Button(width/4, height/4, 200, 60, color(226, 132, 19), color(244, 190, 124), fast_rocket);
  let b2 = new Button(width/2, height/4, 200, 60, color(0, 159, 183), color(153, 241, 255), fut_bass);
  let b3 = new Button(3*width/4, height/4, 200, 60, color(145, 145, 233), color(204, 204, 245), flute);

  let b4 = new Button(width/4, height/2, 200, 60, color(205, 92, 92), color(240, 128, 128), handgun);
  let b5 = new Button(width/2, height/2, 200, 60, color(72, 209, 204), color(175, 238,238), pop_click);
  let b6 = new Button(3*width/4, height/2, 200, 60, color(255, 215, 0), color(255, 255, 0), bell);

  let b7 = new Button(width/4, 3*height/4, 200, 60, color(255, 163, 175), color(255, 214, 220), buzz_in);
  let b8 = new Button(width/2, 3*height/4, 200, 60, color(143, 45, 86), color(216, 131, 166), heavy_slide);
  let b9 = new Button(3*width/4, 3*height/4, 200, 60, color(236, 78, 32), color(234, 162, 133), piano_fall);

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function draw() {
  // put drawing code here
  background(210, 178, 183);
  noStroke();

  for (let i = 0; i< buttons_top.length;i++){
    buttons_top[i].show();
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}
