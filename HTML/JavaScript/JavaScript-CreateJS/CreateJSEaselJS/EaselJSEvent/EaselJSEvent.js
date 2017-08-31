
var stage = new createjs.Stage('gameview');

var gameview = new createjs.Container();

stage.addChild(gameview);

var rect = new createjs.Shape();
rect.graphics.beginFill('red');
rect.graphics.drawRect(10, 10, 50, 50);

rect.addEventListener('click', function(event) {
   // alert('X = ' + event.localX + ' Y = ' + event.localY);
    console.log('click');
});

rect.addEventListener(
    'dblclick', function() {
        console.log('dbclick');
    }
);

createjs.Ticker.setFPS(5);
createjs.Ticker.addEventListener('tick', handlerTicker);

gameview.addChild(rect);

stage.update();


var speedX = 10;

function handlerTicker() {
    if (rect.x <= 0) {
        speedX = Math.abs(speedX);
    }

    if (rect.x >= 300) {
        speedX = -Math.abs(speedX);
    }
    rect.x += speedX;
    stage.update();
}