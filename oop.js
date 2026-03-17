// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("\n            \uC774\uB984 : ".concat(_this._empName, "\n            \uB098\uC774 : ").concat(_this._age, "\n            \uC9C1\uC5C5 : ").concat(_this._empJob));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee("kim", 25, "소프트웨어 개발자");
employee1.empName = "lee";
employee1.printEmp();
