

function Circle() {

    createjs.Shape.call(this);

    this.setCircleType = function(type) {
        this._circleType = type;
        switch (type) {
            case Circle.TYPE_RED:
                this.setColor('red');
                break;
            case  Circle.TYPE_GREEN:
                this.setColor('green');
                break;
        }
    }

    this.setColor = function(color) {
        this.graphics.beginFill(color);
        this.graphics.drawCircle(260, 260, 50);
        this.graphics.endFill();
    }
    this.setCircleType(Circle.TYPE_RED);

}

Circle.prototype = new createjs.Shape();
Circle.TYPE_RED = 1;
Circle.TYPE_GREEN = 2;