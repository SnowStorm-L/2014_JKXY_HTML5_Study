/**
 * Created by L on 2017/3/27.
 */

function docwrite() {
    document.write("xd");
}

function getElementByID() {
   var p = document.getElementById("p_id");
   p.innerHTML = "had change p";
}

function getElementByTag() {
    // 相同标签的第一个
    var p = document.getElementsByTagName("p");
    p[0].innerHTML = "123123";
    alert("p");
}

function changeURLAndImage() {
    var a = document.getElementById('a_id');
    a.href = "http://stackoverflow.com/";
    a.innerHTML = "stackoverflow";
    document.getElementById('img_id').src = "../../img/DOM图解.png";
}

function changeBackgroundColor() {
    document.getElementById("div_id").style.background = "blue";
}