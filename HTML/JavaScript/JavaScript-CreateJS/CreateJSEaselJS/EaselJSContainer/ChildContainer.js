
function ChildContainer() {
    var rect = new  createjs.Shape();
    rect.graphics.beginFill('red');
    rect.graphics.drawRect(0, 0, 50, 50);
    rect.graphics.endFill();
    var text = new createjs.Text('1', '30px Aril', 'yellow');
    this.addChild(rect);
    this.addChild(text);
}

ChildContainer.prototype = new createjs.Container();