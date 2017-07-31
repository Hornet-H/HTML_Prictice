/**
 * Created by huanglaifeng on 2017/7/31.
 */
$(document).ready(function () {
    // alert("文档加载完毕");
    $("p").click(function () {
        $(this).hide();
    });
    $("button").click(function () {
        $("#pid").text("p元素被修改了");
    })
});
