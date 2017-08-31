
var canvas;
var stage;

createjs.MotionGuidePlugin.install(createjs.Tween);

canvas = document.getElementById('gameview');
stage = new createjs.Stage(canvas);

var ball = new createjs.Shape();
var b = ball.graphics;

b.beginFill("#f00").drawCircle(0, 0, 50);
b.endFill();

createjs.Tween.get(ball, {loop: false}, true)
        .to({guide: {path: [100, 100, 800, 100, 800, 300], orient: true}}, 5000);

stage.addChild(ball);

createjs.Ticker.addEventListener("tick", stage);