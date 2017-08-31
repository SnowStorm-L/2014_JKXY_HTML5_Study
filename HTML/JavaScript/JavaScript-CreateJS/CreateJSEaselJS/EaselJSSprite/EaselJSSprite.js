
var stage = new createjs.Stage('gameview');

var spriteSheet = new createjs.SpriteSheet({
    "images": ['../../../../img/runningGrant.png'],
    "frames": {
        "height": 361.5,
        "width": 200.75,
        "count": 64
    },
    "animations": {
        "run": [0, 25, "jump"],
        "jump": [26, 63, "run"]
    }
});

var sprite = new createjs.Sprite(spriteSheet, 'run');
sprite.x = 100;
sprite.y = 50;

stage.addChild(sprite);

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener('tick', stage);

