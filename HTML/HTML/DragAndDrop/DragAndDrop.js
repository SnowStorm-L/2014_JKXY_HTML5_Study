var box1Div, box2Div, msgDiv, originImg;

var imgContainer;

window.onload = function() {

    box1Div = document.getElementById('box1');
    box2Div = document.getElementById('box2');
    msgDiv = document.getElementById('msg');
    originImg = document.getElementById('originImg');

    box1Div.ondragenter = box1DivOndragenter;
    box1Div.ondragover = box1DivOndragover;

    box2Div.ondragover = box2DivOndragover;

    originImg.ondragstart = originImgOndragstart;

    box1Div.ondrop = dropImgHandler;
    box2Div.ondrop = dropImgHandler;


    imgContainer = document.getElementById('imgContainer');
    imgContainer.ondragover = imgContainerOndragover;
    imgContainer.ondrop = imgContainerOndrop;

};

function box1DivOndragenter(ondragent) {
    //showObj(ondragent);
}

function box1DivOndragover(ondragover) {
    ondragover.preventDefault(); // 阻止系统默认操作
}

function box2DivOndragover(ondragover) {
    ondragover.preventDefault(); // 阻止系统默认操作
}

function originImgOndragstart(ondragstart) {
    ondragstart.dataTransfer.setData('imgId', 'originImg');
}

// mark: - imgContainer

function imgContainerOndragover(ondragover) {
    ondragover.preventDefault();
}

function imgContainerOndrop(ondrop) {
    ondrop.preventDefault();
    //showObj(ondrop.dataTransfer);

    var file = ondrop.dataTransfer.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
        //showObj(event);
        imgContainer.innerHTML = "<img src=\"" + fileReader.result + "\">"
    }

    fileReader.readAsDataURL(file);
}

function dropImgHandler(ondrop) {

    showObj(ondrop.dataTransfer);
    ondrop.preventDefault();

    /* 创建节点 */
    var img = document.getElementById(ondrop.dataTransfer.getData('imgId'));
    /* 添加 */
    ondrop.target.appendChild(img);

}

function showObj(obj) {
    var str = '';
    for (var kind in obj) {
        str += kind + ':' + obj[kind] + '<br/>';
    }
    msgDiv.innerHTML = str;
}