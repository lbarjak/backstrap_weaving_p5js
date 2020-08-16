var a;
var b;
var c;
var mintak = new Array('ssssvvvvvvvsssvsssvvvvvvvssss', 'ssssvvvssssssvvssssssvvvssss');
//var ex = 0; //eltolás középre
var ey = 0; //eltolás lefelé
var h = 0; //minta első sorának hossza
var x = 0; //hatszög x pozíciója
var y = 0; //hatszög y pozíciója
var red_ = 0;
var green_ = 0;
var blue_ = 0;
var ciklus = 0;
var canvas;

function hatszog(x, y, r, g, b) {
    beginShape();
    fill(r, g, b);
    noStroke();
    vertex(x, y + 7);
    vertex(x + 7, y);
    vertex(x + 14, y + 7);
    vertex(x + 14, y + 39);
    vertex(x + 7, y + 46);
    vertex(x, y + 39);
    endShape(CLOSE);
}

function setup() {
    canvas = createCanvas(600, 300);
    // canvas.parent('myContainer');
    //canvas.position(0, 0);
    background(255);
    fill(128);
    rect(0, 0, 600, 300);
}

function draw() {

    if (!isFinite(a)) { a = 0; }
    if (!isFinite(b)) { b = 0; }
    if (!isFinite(c)) {
        c = 0;
    }

    var h0 = mintak[0].length;
    var h = mintak[c].length;
    var t = (mintak[c].charAt(c * (h - 1 - 2 * a) + a));
    if (t === 's') {
        red_ = 255;
        green_ = 0;
        blue_ = 0;
    } else {
        red_ = 255;
        green_ = 255;
        blue_ = 255;
    }
    hatszog(1 + width / 2 - h0 * 8 + (c * (h - 1 - 2 * a) + a) * 16 + c * 8, 4 + b * 41 + ey, red_, green_, blue_);
    a = a + 1;

    if ((a === h) && (c === 0)) {
        c = 1;
        a = 0;
        b = b + 1;
    }
    if ((a === h) && (c === 1)) {
        c = 0;
        a = 0;
        b = b + 1;
    }
    if ((b + 1) * 41 >= height - ey) {
        b = 0;
        c = 0;

        ciklus = ciklus + 1;
        if (ciklus < 3) {
            fill(128);
            rect(0, 0, 600, 300);
        }
    }

    //if ((mouseIsPressed || touchIsDown) && mouseX < 600 && mouseY < 300 && mouseY > 0) {
    //    fill(255);
    //    rect(0, 0, 600, 300);
    //}
    if (mouseIsPressed && mouseX < 600 && mouseY < 300 && mouseY) {
        fill(128);
        rect(0, 0, 600, 300);
        a = 0;
        b = 0;
        c = 0;
        ciklus = 2;
    }
}