
window.onload = function() {

    imgLocation("container", "box");

    window.onscroll = function() {

        if (checkShouldLoadImg()) {
            loadImg();
            imgLocation("container", "box");
        }
    }
}

/* 获得多少张图片 */
function imgLocation(parent, content) {
    //将parent(父级控件)下所有的content(每个box)全部取出
    var catchParent = document.getElementById(parent);
    var catchContent = getChildElement(catchParent, content);
    //console.log(catchContent.length);
    /* 得到图片的宽度 */
    var imgWidth = catchContent[0].offsetWidth;
    //console.log(imgWidth);
    /* 屏幕宽度除以图片宽度, 得知一行多少张图 */
    var cloums = Math.floor(document.documentElement.clientWidth / imgWidth);
    //console.log(cloums);
    // 固定化                      一张图片的宽度乘以一行的图片数量        居中
    catchParent.style.cssText = "width:" + imgWidth*cloums + "px;margin:0 auto";

    // 承载第一排图片的高度
    var boxHeightArr = [];

    for (var i=0;i<catchContent.length;i++) {
        if (i<cloums) { // 第一排
            // 每张图片的高度,存在数组中
            boxHeightArr[i] = catchContent[i].offsetHeight;
            //console.log(boxHeightArr[i]); 高度
        } else { // 第二排及以后的 摆放位置
            var minHeight = Math.min.apply(null, boxHeightArr);
            //console.log(minHeight); //最小高度
            /* 绝对布局 */
            catchContent[i].style.position = "absolute";
            /* 设置高度 */
            catchContent[i].style.top = minHeight + "px";

            /* 得到最短图片的下标 */
            var minIndex = getMinHeightLocation(boxHeightArr, minHeight);
            /* 摆放的图片居左的位置是 最短图片居左的距离 */
            catchContent[i].style.left = catchContent[minIndex].offsetLeft + "px";
            /* 摆放后的图片高度相加,就不是最矮的图片高度了, 重新寻找填充下一张图 */
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + catchContent[i].offsetHeight;
        }
    }
}

/* 第二排的图片位置放在第一排最短的图片下面, 这个方法是得到上一排最小图片的下标 */
function getMinHeightLocation(boxHeightArr, minHeight) {
   for (var i in boxHeightArr) {
       if  (boxHeightArr[i] == minHeight) {
           return i;
       }
   }
}

/* 得到每一个控件存起来 */
function getChildElement(parent, content) {
    var contentArr = [];
    /* 通过父级控件得到子级控件的所有东西 */
    var allContent = parent.getElementsByTagName("*");
    for (var i=0;i<allContent.length;i++) {
        /* 判断把box,放进去 */
        if (allContent[i].className == content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

/* 加载图片 */
function loadImg() {

    var imgData = {
        "data":[
            {"src": "C.jpg"},
            {"src": "Hacker.jpg"},
            {"src": "Java.png"},
            {"src": "PHP.jpg"},
            {"src": "iOS.jpg"},
            {"src": "Python.jpg"},
            {"src": "C.jpg"},
            {"src": "Java.png"}
        ]
    }

    var catchParent = document.getElementById("container");

    for (var i=0;i<imgData.data.length;i++) {

        var catchContent = document.createElement("div");
        catchContent.className = "box";
        catchParent.appendChild(catchContent);

        var boxImg = document.createElement("div");
        boxImg.className = "box_img";
        catchContent.appendChild(boxImg);

        var img = document.createElement("img");
        img.src = "../../img/Programming/" + imgData.data[i].src
        boxImg.appendChild(img);
    }
}

/* 检查是否滑到最后一张,开始加载图片 */
function checkShouldLoadImg() {
    var catchParent = document.getElementById("container");
    var catchContent =  getChildElement(catchParent, "box");
    /* 最后一个内容距顶的高度 */
    var lastContentHeight = catchContent[catchContent.length - 1].offsetTop;
    /* 滚动的高度 */
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    /* 页面的高度 */
    var currentPageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //console.log("最后一张距离顶部的距离:" + lastContentHeight + "页面的高度:" + currentPageHeight + "滚动的高度:" + scrollTop);
    return lastContentHeight<scrollTop+currentPageHeight
}