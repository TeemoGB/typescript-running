// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드

class Employee {
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string,
  ) {}

  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(`
            이름 : ${this._empName}
            나이 : ${this._age}
            직업 : ${this._empJob}`);
  };
}

let employee1 = new Employee("kim", 25, "소프트웨어 개발자");
employee1.empName = "lee";
employee1.printEmp();
