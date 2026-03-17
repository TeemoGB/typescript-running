var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = "jung";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 123455667;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("\uC774\uB984 \uC124\uC815 : ".concat(this.stdName));
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id) {
    return {
        stdId: id,
        stdName: "park",
        age: 20,
        gender: "female",
        course: "javascript",
        completed: true,
    };
}
function setInfo(student) {
    console.log(student);
}
var std = {
    stdId: 1234,
    stdName: "kim",
    age: 40,
    gender: "male",
    course: "node.js",
    completed: true,
};
// setInfo(std);
// console.log(getInfo(7));
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
function plus(a, b) {
    return a + b;
}
var user = {
    name: "john",
    age: 25,
};
var numStr;
var item;
function convertToNumber(val) {
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return Number(val);
}
function convertToString(val) {
    return String(val);
}
var numbers = [1, 2, 3, 4, 5];
var fruits = ['apple', 'banana'];
// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// let mixedArray: (number | string)[] = [1, 'two', 3];
// for(let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }
// let readonlyArray : ReadonlyArray<number> = [1,2,3,4];
// ==== 튜플 : 타입의 순서가 정해져 있다.
// let greeting: [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }
// ==== spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
