
var stage = new createjs.Stage('gameview');

var gameview = new  createjs.Container();

stage.addChild(gameview);

var rect = new createjs.Shape();
rect.graphics.beginFill('red');
rect.graphics.drawRect(0, 0, 50, 50);

gameview.addChild(rect);

var ellipse = new createjs.Shape();
ellipse.graphics.beginFill('yellow');
ellipse.graphics.drawEllipse(100, 100, 100, 80);

gameview.addChild(ellipse);

var circle = new Circle();
circle.setCircleType(Circle.TYPE_GREEN);

gameview.addChild(circle);

stage.update();