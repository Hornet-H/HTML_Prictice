/**
 * Created by huanglaifeng on 2017/7/31.
 */
var isYes;
$(document).ready(function () {
    // $("#clickMeBtn").click(function () {
    //     alert("hello");
    // })
    $("#clickMeBtn").bind("click",clickHandler1);
    $("#clickHello").bind("click",clickHandler2);
isYes='0';
if (isYes="1"){
    $("#clickHello").unbind("click");
}else {
    isYes='0';
}



});
function clickHandler1(e) {
    isYes=='0';
    console.log("clickHandler1");
};
function clickHandler2(e) {
    console.log("clickHandler2");
};