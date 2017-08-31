var canvas, stage, sprite;
var img = new Image();

window.onload = function() {

    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);

    stage.addEventListener('stagemousedown', clickCanvas);
    stage.addEventListener('stagemousemove', moveCanvas);

    var data = {
        images:["lala.png"],
        frames:{width: 20, height: 20, regX: 10, regY: 10}
    }

    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));
    createjs.Ticker.setFPS(20);
    createjs.Ticker.addEventListener('tick', tick);

}

function tick(event) {

    var childCollection = stage.getNumChildren();

    for (var i = childCollection - 1; i > 0; i--) {

        var child = stage.getChildAt(i);
        child.vY += 2;
        child.vX += 1;
        child.x += child.vX;
        child.y += child.vY;

        child.scaleX = child.scaleY = child.scaleX + child.vS;
        child.alpha += child.vA;

        if (child.alpha <= 0 || child.y > canvas.height) {
            stage.removeChildAt(i);
        }
    }
    stage.update(event);
}

function clickCanvas() {
    addSub(Math.random() * 200 + 100, stage.mouseX, stage.mouseY, 2);
}

function moveCanvas() {
    addSub(Math.random() * 2 + 1, stage.mouseX, stage.mouseY, 1);
}

function addSub(cout, x, y, speed) {

    for (var i = 0; i < cout; i++) {
        // clone 返回当前序列的实例对象(Sprite instance)
        var instanceObject = sprite.clone();
        instanceObject.x = x;
        instanceObject.y = y;
        instanceObject.alpha = Math.random() * 0.5 + 0.5;
        instanceObject.scaleX = instanceObject.scaleY = Math.random() + 0.3;

        var arc = Math.PI * 2 * Math.random();
        var velocity = (Math.random() - 0.5) * 30 * speed;
        instanceObject.vX = Math.cos(arc) * velocity;
        instanceObject.vY = Math.sin(arc) * velocity;
        instanceObject.vS = (Math.random() - 0.5) * 0.2; // scale
        instanceObject.vA = -Math.random() * 0.05 - 0.01; // alpha
        stage.addChild(instanceObject);
    }
}