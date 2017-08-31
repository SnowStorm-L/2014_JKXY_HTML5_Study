
var canvas;
var stage;
var text;
var rect;
var count = 0;

canvas = document.getElementById('gameview');

stage = new  createjs.Stage(canvas);

text = new createjs.Text('text on the canvas... 0!', '36px Arial', '#FFF');
text.x = 100;
text.y = 100;
text.rotation = 20;

stage.addChild(text);

rect = new createjs.Shape();
rect.graphics.clear().beginFill("#F00").drawRect(-10, -10, text.getMeasuredWidth() + 20, 50);
rect.x = text.x;
rect.y = text.y;
rect.rotation = text.rotation;
stage.addChildAt(rect, 0);

createjs.Ticker.setFPS(100);
createjs.Ticker.addEventListener('tick', handlerTick);



function handlerTick() {
    count++;
    text.text = 'text on the canvas...' + count + '!';
    rect.graphics.clear().beginFill("#F00").drawRect(-10, -10, text.getMeasuredWidth() + 20, 50);
    stage.update();
}