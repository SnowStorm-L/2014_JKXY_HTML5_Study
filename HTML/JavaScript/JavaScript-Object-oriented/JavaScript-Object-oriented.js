
/* 创建方法
var person = {
  name: "xueyefengbao",
  age: 30,
  eat: function() {
    alert("能吃饭");
  }
};

alert(person.name);

function Person() {
    
}

Person.prototype = {
    name: "xueyefengbao",
        age: 30,
        eat: function() {
        alert("能吃饭");
    }
}

var p = new Person();

p.age;
p.name;
p.eat();

*/


/* 继承 */

/*
function People(name) {
    this._name = name;
}

People.prototype.say = function() {
    alert("people - Hello" + this._name);
}

function Student(name) {
    this._name = name;
}

Student.prototype = new People();
var superSay =  Student.prototype.say;


Student.prototype.say = function() {
    superSay.call(this);
    alert("student-hello" + this._name);
}

var student = new Student(" luzhixiang");
student.say();


// 封闭 包起来
(function() {
    var name = "luzhixiang"
    //window.People = People; // 放出去
}());
*/

(function () {
    var n = "n";
    function Person(name) {
        var _this = {};
        _this._name = name;
        _this.sayHello = function() {
            alert("Person hello" + _this._name + n);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function() {
        superSay.call(_this);
        alert("teacher Hello" + _this._name);
    }
    return _this;
}

var teacher = Teacher(" zhixiang");
teacher.sayHello();