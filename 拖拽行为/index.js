/**
 * Created by huanglaifeng on 2017/7/17.
 */
var box1Div,box2Div,msgDiv,img1;
window.onload = function () {
    console.log("大黄蜂");
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");

    box1Div.ondrop = dropImagHander;
    box2Div.ondrop = dropImagHander;
    box1Div.ondragover = function (e) {
        e.preventDefault();
    }
    box2Div.ondragover = function (e) {
        e.preventDefault();
    }
    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId","img1");
    }

}
function dropImagHander(e) {
    showObj(e.dataTransfer);
    e.preventDefault();
    var  img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}
function showObj(obj) {
    var  s = "";
    for(var k in  obj){
        s += k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML = s;
}