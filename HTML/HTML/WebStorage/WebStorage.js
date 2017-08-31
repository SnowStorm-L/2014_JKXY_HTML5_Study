var textarea, btn;

var num = 0, span, addBtn;

window.onload = function() {

    textarea = document.getElementById('textarea');
    btn = document.getElementById('button');

    if (localStorage.text) {
        textarea.value = localStorage.text;
    }

    btn.onclick = function() {
        //alert(textarea.value);
        localStorage.text = textarea.value; // 审查元素,存储里面就看到这个值保存了
    }

    span = document.getElementById('span');
    addBtn = document.getElementById('addBtn');

    if (sessionStorage.num) {
        num = sessionStorage.num;
    } else {
        num = 0;
    }
    
    addBtn.onclick = function() {
        num++;
        sessionStorage.num = num;
        showNum();
    }
};

function showNum() {
    span.innerHTML = num;
}