/**
 * Created by huanglaifeng on 2017/7/13.
 */

(function () {
    var n = 10;
    function People(name) {
        this.name = name;
    }
    People.prototype.say = function () {
        alert("hello" + this.name);
    }
    window.People = People;
}());

(function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;//这种写法say可以将它想像成一个属性
    Student.prototype.say = function () {
        superSay.call(this);
        alert("stu_hello"+this.name);
    }
}());

var s = new Student("bobi");
s.say();