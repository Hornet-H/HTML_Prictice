/**
 * Created by huanglaifeng on 2017/7/13.
 */
function People(name) {
    var _this={}
    _this.name = name;
    _this.sayHello = function () {
        alert("我是父类hello" + ":::" + name);
    }
    return _this;
}
function Teacter(name) {
    var _this = People(name);
    var superSay = _this.sayHello;
    _this.sayHello = function (){
        alert("子类的hello" + "::" + name);
        superSay.call(_this);
    }
    return _this;
}
    var t = Teacter("dahuangfeng");
    t.sayHello();