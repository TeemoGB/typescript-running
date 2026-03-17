// 변수의 데이터 타입 명시
let stdId: number = 1111;
let stdName: string = "jung";
let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType {
  Male = "male",
  Female = "female",
}

interface Student {
  stdId?: number;
  stdName?: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  //   setName(name: string): void;
  setName?: (name: string) => void;
  getName?: () => string;
}

class MyStudent implements Student {
  stdId = 123455667;
  stdName = "park";
  age = 30;
  gender: "male" | "female" = "male";
  course = "node.js";
  completed = true;

  setName(name: string): void {
    this.stdName = name;
    console.log(`이름 설정 : ${this.stdName}`);
  }
}

const myInstance = new MyStudent();
myInstance.setName("엘리스");

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "park",
    age: 20,
    gender: "female",
    course: "javascript",
    completed: true,
  };
}

function setInfo(student: Student): void {
  console.log(student);
}

let std = {
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
function plus(a: number, b: number): number {
  return a + b;
}

const user: { name: string; age: number } = {
  name: "john",
  age: 25,
};

type strOrNum = number | string;

let numStr: strOrNum;
let item: number;

function convertToNumber(val: number | string): number {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }

  return Number(val);
}
function convertToString(val: strOrNum): string {
  return String(val);
}

let numbers: number[] = [1,2,3,4,5];
let fruits: string[] = ['apple', 'banana'];

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
let firstArray = [1,2,3];
let secondArray = [4,5,6];

let combineArray = [...firstArray, ...secondArray];
for (let i=0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}

