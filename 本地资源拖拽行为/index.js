/**
 * Created by huanglaifeng on 2017/7/17.
 */
var imgContainer,showMsgDiv ;
window.onload = function () {
    imgContainer = document.getElementById("imgContainer");
    showMsgDiv = document.getElementById("msgDiv");
    imgContainer.ondragover = function (e) {
        e.preventDefault();
    }
    imgContainer.ondrop = function (e) {
        e.preventDefault();
        // showObj(e);
        var  f = e.dataTransfer.files[0];
        var  fileReader = new FileReader();
        fileReader.onload = function (e) {
            showObj(e.target);
            imgContainer.innerHTML = "<img src=\""+fileReader.result+"\">";
        }
        fileReader.readAsDataURL(f);

    }

}
function showObj(obj) {
    var s = "";
    for (var k in  obj){
        s+=k+":"+obj[k]+"<br/>";
    }
    showMsgDiv.innerHTML = s;
}