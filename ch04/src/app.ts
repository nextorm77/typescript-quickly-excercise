/* 코드 4.1: enum 타입으로 요일 정의
enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

let dayOff = Weekdays.Tuesday;
*/

/* 코드 4.2: 자동 증가 값이 적용된 enum
enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let dayOff = Weekdays.Tuesday;

// 숫자 열거 타입 역방향 조회
console.log(Weekdays[3]);
*/

/* 코드 4.3: enum 타입 없이 기온 변환 함수 구현
function convertTemperature(temp: number, fromTo: string): number {
  return fromTo === "FtoC"
    ? ((temp - 32) * 5.0) / 9.0 // 화씨에서 섭씨로
    : (temp * 9.0) / 5.0 + 32; // 섭씨에서 화씨로
}

console.log(`70F is ${convertTemperature(70, "FtoC")} C`);
console.log(`21C is ${convertTemperature(21, "CtoF")} F`);
console.log(`35C is ${convertTemperature(35, "abcd")} F`);
*/

/* 코드 4.4: enum 타입으로 기온 변환 함수 구현
// 열거(enum) 타입의 목적은 제한된 값으로 구성된 상수 세트를 만드는 것
// 값이 없으면 자동으로 0부터 채번
enum Direction {
  FtoC,
  CtoF,
}
function convertTemperature(temp: number, fromTo: Direction): number {
  return fromTo === Direction.FtoC
    ? ((temp - 32) * 5.0) / 9.0 // 화씨에서 섭씨로
    : (temp * 9.0) / 5.0 + 32; // 섭씨에서 화씨로
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)} C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)} F`);
*/

/* 코드 4.5: 문자열 enum 선언
// const enum~ 선언시 JS코드로 생성X
// 대부분 열거 타입은 코드 가독성 향상을 위해 사용
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(where: Direction) {
  if (where === Direction.Up) {
    // Do something
  }
}

//move("North"); // 잘못된 인수는 컴파일러가 감지
move(Direction.Left); // 자동완성 기능 지원

// enum 대체1: 유니온 사용
function move2(where: "Up" | "Down" | "Left" | "Right") {}
//move2("North"); // 컴파일 오류

// enum 대체2: 커스텀 타입 사용
type Direction2 = "Up" | "Down" | "Left" | "Right";
function move3(where: Direction2) {}
//move3("North"); // 컴파일 오류
*/

/* 코드 4.7: 제네릭 타입 사용법
class Person {
  name: string = "";
}

class Employee extends Person {
  department: number = 0;
}

class Animal {
  breed: string = "";
}

const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();
*/

/* 코드 4.8: 제네릭 타입과 구조적 타입 시스템
class Person {
  name: string = "";
}

class Employee extends Person {
  department: number = 0;
}

class Animal {
  name: string = "";
  breed: string = "";
}

const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal(); // 구조적 타입 호환
workers[3] = { name: "Mary" }; // 구조적 타입 호환

const worker: Animal = new Person(); // 컴파일 오류
*/

/* P.107: 제너릭 배열의 사용
// 숫자 배열 선언의 2가지 방법
const values1: string[] = ["Mary", "Joe"]; // 배열내 동일 요소, 읽고 쓰기 편리
const values2: Array<string> = ["Mary", "Joe"];
// 서로 다른 타입의 배열 요소 제한시
const values3: Array<string | number> = ["Mary", 123, true];
const values4: Array<string | number> = ["Mary", 123, 567];
*/

/* 코드 4.9: 제네릭 타입없이 인터페이스 사용
interface Comparator {
  compareTo(value: any): number;
}

class Rectangle implements Comparator {
  compareTo(value: any): number {
    return 1;
  }
}

class Triangle implements Comparator {
  compareTo(value: any): number {
    return 2;
  }
}

const rectangle1 = new Rectangle();
const rectangle2 = new Rectangle();
const triangle1 = new Triangle();
rectangle1.compareTo(rectangle2);
rectangle1.compareTo(triangle1); // 실수로 삼각형과 비교, 컴파일 오류X
*/

/* 코드 4.10: 제네릭 타입으로 인터페이스 쓰기
interface Comparator<T> {
  compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
  compareTo(value: Rectangle): number {
    return 1;
  }
}

class Triangle implements Comparator<Triangle> {
  compareTo(value: Triangle): number {
    return 2;
  }
}

const rectangle1 = new Rectangle();
const rectangle2 = new Rectangle();
const triangle1 = new Triangle();
rectangle1.compareTo(rectangle2);

// 실수로 삼각형과 비교, 컴파일 오류 예상했으나
// 오류 발생하지 않음!!
rectangle1.compareTo(triangle1); 
*/

/* 코드 4.11: 제네릭 인터페이스를 사용한 실제 예
interface Comparator<T> {
  compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
  constructor(private width: number, private height: number) {}
  compareTo(value: Rectangle): number {
    return this.width * this.height - value.width * value.height;
  }
}

const rect1: Rectangle = new Rectangle(2, 5);
const rect2: Rectangle = new Rectangle(2, 3);

rect1.compareTo(rect2) > 0
  ? console.log("rect1 is bigger")
  : rect1.compareTo(rect2) == 0
  ? console.log("rectangle are equal")
  : console.log("rect1 is smaller");

class Programmer implements Comparator<Programmer> {
  constructor(public name: string, private salary: number) {}
  compareTo(value: Programmer): number {
    return this.salary - value.salary;
  }
}

const prog1: Programmer = new Programmer("John", 20000);
const prog2: Programmer = new Programmer("Alex", 30000);

prog1.compareTo(prog2) > 0
  ? console.log(`${prog1.name} is richer`)
  : prog1.compareTo(prog2) == 0
  ? console.log(`${prog1.name} earn the same amounts`)
  : console.log(`${prog1.name} is poorer`);
*/

/* P.112: 제네릭 타입의 기본값(방법1)
class A<T> {
  constructor(value: T) {}
}

//class B extends A{} // 컴파일 오류

class B extends A<any> {} // 컴파일 오류 제거
*/

/* P.113: 제네릭 타입의 기본값(방법2)
class A<T = any> {
  constructor(value: T) {}
}

class B extends A {} // 오류 없음

// any 타입 대신 임시 타입 사용
class C<T = {}> {
  constructor(value: T) {}
}

class D extends C {} // 오류 없음
*/

/* 코드 4.12: any 타입을 사용한 함수
// 타입스크립트가 어떤 인수 타입으로 호출되었는 지 모름
// 변수 a, b 위에 마우스를 올리면 any로 표시
function printMe(content: any): any {
  console.log(content);
  return content;
}

const a = printMe("Hello");

class Person {
  constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));
*/

/* 코드 4.13: 제네릭 함수
// 변수 a, b 위에 마우스를 올리면 타입(?) 표시
// 나중에 a, b 사용시 TS 정적분석기와 타입검사 수행
function printMe<T>(content: T): T {
  console.log(content);
  return content;
}

const a = printMe("Hello");

class Person {
  constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));
*/

/* 4.14: 4.13을 화살표 함수 내 제네릭 타입 사용
const printMe = <T>(content: T): T => {
  console.log(content);
  return content;
};

const a = printMe("Hello"); // 타입 유추가능하므로 굳이 타입 명시X
//const a = printMe<string>("Hello"); // 명시적 타입 추가

class Person {
  constructor(public name: string) {}
}

const b = printMe(new Person("Joe")); // 타입 유추가능하므로 굳이 타입 명시X
//const b = printMe<Person>(new Person("Joe")); // 명시적 타입 추가
*/

/* 4.15~4.17
// 4.15: Pair 제네릭 클래스
// 키와 값은 모든 타입이 가능하므로 제네릭 타입으로 선언
class Pair<K, V> {
  constructor(public key: K, public value: V) {}
}

// 4.16: compare 제네릭 함수
function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
  return pair1.key === pair2.key && pair1.value === pair2.value;
}

// 4.17: compare()와 Pair 사용
let p1: Pair<number, string> = new Pair(1, "Apple");
let p2 = new Pair(1, "Orange");

// apples와 orange를 비교: 상세 파라미터 호출
console.log(compare<number, string>(p1, p2));

let p3 = new Pair("first", "apple");
let p4 = new Pair("first", "apple");

// apples와 apples를 비교
console.log(compare(p3, p4));
*/

/* 4.18: string 열거 타입을 맵핑
enum UserRole {
  Administrator = "admin",
  Manager = "manager",
}

interface User {
  name: string;
  role: UserRole;
}

function loadUser<T>(): T {
  return JSON.parse('{"name":"john","role":"admin"}');
}

const user = loadUser<User>();

switch (user.role) {
  case UserRole.Administrator:
    console.log("Show constrol panel");
    break;
  case UserRole.Manager:
    console.log("Hide control panel");
    break;
}
*/

/* 4.19: 고차함수(Higher order function) 사용
// 고차함수: 함수를 인자로 받거나 다른 함수를 반환하는 함수
const outerFunc = (someValue: number) => (multiplier: number) =>
  someValue * multiplier;

const innerFunc = outerFunc(10);

let result = innerFunc(5);

console.log(result);
*/

/* 4.20: 제네릭 함수 numFunc<T> 의 사용
type numFunc<T> = (arg: T) => (c: number) => number;

const noArgFunc: numFunc<void> = () => (c: number) => c + 5;
//const tempFunc = noArgFunc();
//console.log(tempFunc(5));
const numArgFunc: numFunc<number> =
  (someValue: number) => (multiplier: number) =>
    someValue * multiplier;

const stringArgFunc: numFunc<string> =
  (someText: string) => (padding: number) =>
    someText.length * padding;

const createSumString: numFunc<number> = () => (x: number) => "Hello";
*/
