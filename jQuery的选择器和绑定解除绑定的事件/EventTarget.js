/**
 * Created by huanglaifeng on 2017/8/2.
 */
$(document).ready(function () {
    $("body").bind("click",bodyHandler);
    $("div").bind("click",bodyHandler1);
    // $("div").bind("click",bodyHandler2);

})
function bodyHandler(event) {
    console.log(event);


}
function bodyHandler1(event) {
    console.log(event);
    event.stopPropagation();
    console.log("bodyHandler1");
}
// function bodyHandler2(event) {
//     console.log(event);
//     event.stopPropagation();
// }