/**
 * Created by L on 2017/3/24.
 */

var array = ["1","2","3","4","5"];

for (var i=0;i<5;i++) {
    console.log("for "+array[i]);
}

for (var index in array)  {
    //  当检测某个对象是否拥有某个属性时，hasOwnProperty 是唯一可以完成这一任务的方法，
    // 在 for in 循环时，建议增加 hasOwnProperty 进行判断，可以有效避免扩展本地原型而引起的错误
    if (array.hasOwnProperty(index)) {
        console.log("for in "+array[index]);
    }
}



var w = 10;

while (w<10) {
    console.log("while "+w);
    w++;
}

// do和do..while的区别
// do..while是会先执行一遍再去判断
// 看以下代码就算w不是小于10的,do..while也会打印一次,而do不会

do {
    console.log("do while "+w);
    w++;
} while (w<10);