/**
 * Created by huanglaifeng on 2017/7/14.
 */
var imgData = {
    "data":[
        {"src":"01.jpg"},
        {"src":"02.jpg"},
        {"src":"03.jpg"},
        {"src":"04.jpg"},
        {"src":"05.jpg"},
        {"src":"06.jpg"},
        {"src":"07.jpg"},
        {"src":"08.jpg"},
    ]
}
window.onload = function ()
{
    imagLocation("container","box");

    //window在滚动的时候调用
    // onscroll();

}
window.document.onscroll = function ()
{
    if(checkFlag())
    {
        var  containerBox = document.getElementById("container");
        for(var i = 0;i < imgData.data.length;i++)
        {
            var content = document.createElement("div");
            content.className = "box";
            containerBox.appendChild(content);
            var  box_img = document.createElement("div");
            box_img.className = "box_img";
            content.appendChild(box_img);
            var img = document.createElement("img");
            img.src = "../Image/"+imgData.data[i].src;
            console.log(img.src);
            box_img.appendChild(img);
        }
        imagLocation("container","box");

    }

}
//检测是否需要加载
function checkFlag() {
     var containerBox = document.getElementById("container");
     var content = getElement(containerBox,"box");
     var lastContentHeight = content[content.length - 1].scrollTop;
     var scrollsTop = document.documentElement.scrollTop || document.body.scrollTop;
     var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
     if (lastContentHeight <= scrollsTop + pageHeight){
        return true;
     }else {
        return false;
     }
}

function imagLocation(parentID,contentName) {
    //将parent下所有的content全部取出
    var  parent = document.getElementById(parentID);

    var content = getElement(parent,contentName);
    var imgWith = content[0].offsetWidth;
    var  cols = Math.floor(document.documentElement.clientWidth / imgWith);
    parent.style.cssText = "width:"+imgWith*cols+"px;margin:0 auto";//margin:0 auto这句话是为了让内容居中
    // console.log(content);

    //定义一个高度数组用来存放高度
    var BoxHeightArr = [];
    for (var i = 0;i <content.length;i ++){
        if (i < cols){
            BoxHeightArr[i] = content[i].offsetHeight;
            // console.log(BoxHeightArr[i]);
        }else {
            var  minHeight = Math.min.apply(null,BoxHeightArr);
            //拿到最小值对应的下标
            var minIndex = getMinHeightLocation(BoxHeightArr,minHeight);
            content[i].style.position = "absolute";
            content[i].style.top = minHeight + "px";
            content[i].style.left = content[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + content[i].offsetHeight;
            // console.log( "minHeight"+minHeight);
        }


    }

}
function getElement(parent,contentName) {
    var contentArr = [];//定义一个数组
    var allContent = parent.getElementsByTagName("*");//取出父类中所有的内容
    for(var i = 0;i < allContent.length; i ++){
        if(allContent[i].className == contentName){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

function getMinHeightLocation(arr,minHeight) {
    for (var i = 0;i < arr.length;i ++){
        if (arr[i] == minHeight){

            return i;

        }
    }
}