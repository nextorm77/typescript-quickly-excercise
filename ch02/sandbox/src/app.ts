/* 코드 2.1: 객체 프로퍼티로 Symbol 사용하기
// tsc --t ES6 파일명.ts => 이렇게 해야 symbol 에러 안남
const ord = Symbol("orderId");

const myOrder = {
  ord: "123",
};
console.log(myOrder["ord"]);
*/

/* 코드 2.5: 타입스크립트-세금 계산 함수
function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined {
  if (state === "NY") {
    return income * 0.06 - dependents * 500;
  } else if (state === "NJ") {
    return income * 0.05 - dependents * 300;
  }
}
let tax = calcTax("NJ", 50000, 4);
//let tax = calcTax("SS", 50000, 4);
console.log(tax);
*/

/* 코드 2.6: any 타입을 사용하는 padLeft()함수
function padLeft(value: string, padding: any): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}.`);
}

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
console.log(padLeft("Hello world", true));
*/

/* 코드 2.8: union 타입이 적용된 padLeft()함수
function padLeft(value: string, padding: string | number): string | undefined {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  }
  // 그 외의 경우에 리턴하는 문자열 반환문을 삽입하던지
  // 반환타입에 void 또는 undefined 추가
}
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
console.log(padLeft("Hello world", true));
*/

/* 코드 2.9: nerver 타입이 적용된 padLeft()함수
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  } else {
    return padding;
  }
}

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
//console.log(padLeft("Hello world", true));
*/

/* 코드 2.10~13
// 코드 2.10: Foot와 Pound 타입 선언
type Foot = number;
type Pound = number;

// 코드 2.11: 타입 별칭을 사용해 새 타입 선언
type Patient = {
  name: string;
  height: Foot;
  weight: Pound;
};

// 코드 2.12: 타입 프로퍼티 선언 및 초기화
// 객체 리터럴 표기법을 사용해 인스턴스 생성
let patient: Patient = {
  name: "Joe Smith",
  height: 5,
  weight: 100,
};

// 코드 2.13: weight 프로퍼티가 없는 경우
let patient2: Patient = {
  name: "Joe Smith",
  height: 5
};
*/

/* 코드 2.14: 조건부 프로퍼티 선언
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight?: Pound;
};

let patient: Patient = {
  name: "Joe Smith",
  height: 5,
};
*/

//type ValidatorFn = (c: number)=>{[key:string]: any}|null; // 함수 시그니처

/* 그림 2.2: 클래스 Person을 ES6로 컴파일한 결과
class Person {
  firstName: string;
  lastName: string;
  age: number;
  //생성자에서 초기화하지 않으면 컴파일 오류
  constructor() {
    this.firstName = "John";
    this.lastName = "Smith";
    this.age = 25;
  }
  // readonly 프로퍼티인 경우, 나중에 생성자 초기화시 컴파일 오류X
  // 생성자 초기화 후 해당 프로퍼티 수정 불가
  //constructor(
  //  readonly fistName: string,
  //  readonly lastName: string,
  //  readonly age: number
  //) {}
}
const p = new Person();
console.log(p);
p.firstName = "snoo";
console.log(p);
*/

/* 그림 2.4: interface 키워드를 사용한 커스텀 타입 Person
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson(person: Person): void {
  console.log("Saving ", person);
}

const p: Person = {
  firstName: "John",
  //lastName: "Smith",
  age: 25,
};

savePerson(p);
*/

/* 코드 2.18~19
// 코드 2.18: 타입스크립트의 구조적 타입 시스템(structural type system)
class Person {
  name: string;
  constructor() {
    this.name = "Smith";
  }
}
class Customer {
  name: string;
  constructor() {
    this.name = "John";
  }
}

const cust: Customer = new Person(); // 타입구조가 동일하여 오류 발생X
console.log(cust);

// 코드 2.19: 상호 호환 가능한 타입
const cust2: Customer = { name: "Mary" };

// 접근 제어자는 타입호환성에 영향을 줌
// Person 클래스의 name이 private일 경우, 컴파일 오류
const pers: Person = { name: "John" };
*/

/* 코드 2.20~21
// 코드 2.20: 클래스 프로퍼티가 모두 일치하지 않는 경우
class Person {
  name: string;
  age: number;
  constructor() {
    this.name = "Smith";
    this.age = 15;
  }
}
class Customer {
  name: string;
  constructor() {
    this.name = "John";
  }
}

const cust: Customer = new Person(); // 채울 값이 부족하지 않아서 오류X?

// 코드 2.21: 참조된 변수보다 인스턴스의 프로퍼티가 더 많은 경우
const pers: Person = new Customer() // 채울 값이 부족해서 오류? => 타입 불일치
*/

/* 코드 2.23~24
// 코드 2.23: 유니온에서 식별자를 사용해 모양 구분하기
interface Rectangle {
  kind: "rectangle"; // 식별자
  width: number;
  height: number;
}

interface Circle {
  kind: "circle"; // 식별자
  radius: number;
}

type Shape = Rectangle | Circle;

// 코드 2.24: 식별 가능한 유니온의 사용
function area(shape: Shape): number {
  switch (shape.kind) {
    case "rectangle":
      return shape.height * shape.width;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
// 객체 리터럴을 사용하여 초기화
const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };
console.log(`Rectangle's area is ${area(myRectangle)}`);
*/

/* 코드 2.25: 타입 any 사용
type Person = {
  address: string;
};

let person1: any;

person1 = JSON.parse('{"adress":"25 Broadway"}');

console.log(person1.address); // undefined
*/

/* 코드 2.26:  unknown 타입 사용시 컴파일 오류
type Person = {
  address: string;
};

let person2: unknown;

person2 = JSON.parse('{"adress":"25 Broadway"}');

console.log(person2.adress);
*/

/* 코드 2.27~29 시작
type Person = {
  address: string;
};

let person2: unknown;

person2 = JSON.parse('{"address":"25 Broadway"}');
//person2 = null;
//console.log(person2.address);

// 2.27:  isPerson 타입 가드(첫 버전)
// isPerson 타입 가드는 주어진 객체가 address 프로퍼티를 가지고 있으면 true 반환
const isPerson = (object: any): object is Person => "address" in object;

// 2.29: isPerson 타입 가드
// !!연산자는 주어진 객체가 true(참같은 값?)인지 확인
// null 값일 경우의 런타임 오류 방지
//const isPerson = (object: any): object is Person =>
//  !!object && "address" in object;

//console.log(isPerson(null));

// 2.28: isPerson 타입 가드를 적용한 구문
if (isPerson(person2)) {
  console.log(person2.address);
} else {
  console.log("person2 is not a Person");
}
*/
// 코드 2.27~29 끝

/* 2장 마지막 예제의 시작
type Person = {
  discriminator: "person"; // 식별자 프로퍼티
  address: string;
};

let person2: unknown; // any일 경우, 컴파일 오류 탐지X

person2 = JSON.parse('{"address":"25 Broadway"}');

const isPerson = (object: any): object is Person =>
  !!object && object.discriminator === "person";

if (isPerson(person2)) {
  console.log(person2.discriminator);
} else {
  console.log("person2 is not a Person");
}
// 2장 마지막 예제의 끝
*/

/* 연습문제 시작
class Dog {
  constructor(readonly name: string) {}
  sayHello(): string {
    return "Blah~";
  }
}

class Fish {
  constructor(readonly name: string) {}
  dive(howDeep: number): string {
    return `Dive into ${howDeep} feet.`;
  }
}

type Pet = Dog | Fish; // 타입 구조가 달라 호환이 안되는 문제 극복?

// 타입가드(instanceof)를 사용
function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "Fish cannot talk, sorry";
  }
}

const pet1: Pet = new Dog("Jack");
const pet2: Pet = new Fish("Smith");

console.log(talkToPet(pet1));
console.log(talkToPet(pet2));
//console.log(talkToPet({ name: "Nancy" }));

// 프로퍼티 readonly 유무에 따라 컴파일 오류 발생
console.log(pet1.name);
*/
// 연습문제 끝
