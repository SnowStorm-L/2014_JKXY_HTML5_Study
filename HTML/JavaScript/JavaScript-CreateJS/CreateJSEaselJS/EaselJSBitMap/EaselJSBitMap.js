
var stage = new createjs.Stage('gameview');

var gameview = new createjs.Container();

stage.addChild(gameview);

var bitmap = new createjs.Bitmap('../../../../img/Programming/C.jpg');

gameview.addChild(bitmap);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick', function() {
    stage.update();
})

