/**
 * Created by L on 2017/3/22.
 */

var a = 10; //变量 var 名字 a 数值 10
var b = 20; //房子     宾馆   双人间

var m = a+b;

document.write(m.toString());

// var string = "hello"; //字符串
// var i = 10; //数字
// var flag = true; //布尔
// var array = [1,2,3,4]; //数组 字面量
// var SpecifiedQuantityArray = new Array(5); //指定数量
// var n = null; //空
// var r; //未定义

m = null;

// document.write(m);

var n = 10; //全局变量
k = 10;  //全局变量

function demo() {
    var i = 10; //局部变量
    x = 10; //函数调用后，变成全局变量
}