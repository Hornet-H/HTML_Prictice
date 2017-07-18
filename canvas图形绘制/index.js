/**
 * Created by huanglaifeng on 2017/7/18.
 */

var  CANVAS_WIDTH =500; CANVAS_HEIGHT = 500;
var  mycanvas,context;
window.onload = function () {
    creatCanvas();
}
function creatCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" width=\"" + CANVAS_WIDTH + "\" height=\""+ CANVAS_HEIGHT +"\"></canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
    // drawRect();
    drawImage();
}
function drawRect() {
    context.fillStyle = "#FF0000";
    // context.rotate(45);
    context.scale(2.0,0.5);
    context.fillRect(125,125,250,250);

}
function drawImage() {
    var img = new Image();
    img.onload = function () {
        context.drawImage(img,0,0)
    }
    img.src = "./01.jpg";
}