/**
 * Created by huanglaifeng on 2017/7/14.
 */
window.onload = function () {
    imagLocation("container","box");
}
function imagLocation(parentID,contentName) {
    //将parent下所有的content全部取出
    var  parent = document.getElementById(parentID);

    var content = getElement(parent,contentName);
    var imgWith = content[0].offsetWidth;
    var  cols = Math.floor(document.documentElement.clientWidth / imgWith);
    parent.style.cssText = "width:"+imgWith*cols+"px;margin:0 auto";//margin:0 auto这句话是为了让内容居中
    console.log(content);

    //定义一个高度数组用来存放高度
    var BoxHeightArr = [];
    for (var i = 0;i <content.length;i ++){
        if (i < cols){
            BoxHeightArr[i] = content[i].offsetHeight;
            console.log(BoxHeightArr[i]);
        }else {
            var  minHeight = Math.min.apply(null,BoxHeightArr);
            //拿到最小值对应的下标
            var minIndex = getMinHeightLocation(BoxHeightArr,minHeight);
            content[i].style.position = "absolute";
            content[i].style.top = minHeight + "px";
            content[i].style.left = content[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + content[i].offsetHeight;
            console.log( "minHeight"+minHeight);
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