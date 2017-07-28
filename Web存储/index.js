/**
 * Created by huanglaifeng on 2017/7/20.
 */
var ta;
var btn;
window.onload = function () {
    ta = document.getElementById("ta");
    if (localStorage.text){
        ta.value = localStorage.text;
    }


    btn = document.getElementById("btn");
    btn.onclick = function () {
        // alert(ta.value);
        localStorage.text = ta.value;
    }
}