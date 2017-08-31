
var stage = new createjs.Stage('gameview');

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick', stage);

var movieClip = new createjs.MovieClip(null, 0, true, {start: 50});

stage.addChild(movieClip);

var sate1 = new createjs.Shape(new createjs.Graphics().beginFill('#999999').drawCircle(0, 100, 30));
var sate2 = new createjs.Shape(new createjs.Graphics().beginFill('#555555').drawCircle(0, 100, 30));

movieClip.timeline.addTween(
    createjs.Tween.get(sate1).to({x: 0}).to({x: 400}, 100).to({x:0}, 100)

)

movieClip.timeline.addTween(
    createjs.Tween.get(sate2).to({x: 400}).to({x: 0}, 100).to({x: 400}, 100)

)

movieClip.gotoAndPlay('start');