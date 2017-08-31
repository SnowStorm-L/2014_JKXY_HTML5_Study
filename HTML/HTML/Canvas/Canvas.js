var CANVAS_WIDTH = 200, CANVAS_HEIGHT = 200;

var canvas, context;

var txt, stage;

var count = 0;

window.onload = function() {
    createCanvas();
    //drawRect();
    //drawImg();
    easeljsDraw();
};

function createCanvas() {

    document.body.innerHTML = '<canvas id="canvas" width="' + CANVAS_WIDTH +
        '" height="' + CANVAS_HEIGHT + '"> </canvas>';
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    stage = new createjs.Stage(canvas);
}

function drawRect() {

    context.fillStyle = '#FF0000';
    //context.rotate(45);
    //context.translate(100, 100);
    //context.scale(0.5, 0.5);
    context.fillRect(0, 0, 200, 200);
}

function drawImg() {
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 0, 0);
    };
    img.src = '../../img/DOM图解.png';
}

function easeljsDraw() {
    txt = new createjs.Text('number->0', '20px Arial', '#ff7700');
    stage.addChild(txt);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', tick);
}

function tick() {
    count++;
    txt.text = 'number->' + count + '!';
    stage.update();
}
