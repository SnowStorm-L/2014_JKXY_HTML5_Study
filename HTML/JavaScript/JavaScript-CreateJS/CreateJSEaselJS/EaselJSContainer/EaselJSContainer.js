
var stage = new createjs.Stage('gameview');

var gameview = new createjs.Container();

stage.addChild(gameview);

var child = new ChildContainer();

gameview.addChild(child);

stage.update();