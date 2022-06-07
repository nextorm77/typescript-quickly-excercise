/* 그림 3.1~2
// 그림 3.1: TS의 클래스 상속
// default 접근제어자는 public
class Person {
  firstName = "";
  lastName = "";
  age = 0;

  // 그림 3.2
  sayHello(): string {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  department = "";
}

const empl = new Employee();
*/

/* 그림 3.3: private인 프로퍼티가 안보임
class Person {
  public firstName = "";
  public lastName = "";
  private age = 0;

  // 그림 3.2
  protected sayHello(): string {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  department = "";

  reviewPerformance(): void {
    this.sayHello();
    this.increasePay(5);
  }

  increasePay(percent: number): void {}
}

const empl = new Employee();
//empl.sayHello(); // 컴파일 오류
*/

/* 그림 3.4: 클래스 상세 버전
// 생성자 내 3가지 프로퍼티를 명시적으로 선언 및 초기화
class Person {
  public firstName = "";
  public lastName = "";
  private age = 0;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
*/

/* 그림 3.5: 클래스 간결 버전, 생정자의 파라미터와 함께 액세스 한정자 사용
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
}

const pers = new Person("John", "Smith", 29);

//console.log(`${pers.firstName} ${pers.lastName} ${pers.age}`);
console.log(`${pers.firstName} ${pers.lastName}`);
*/

/* 코드 3.1: static 프로퍼티를 사용
// 간단한 사격 게임 가정
class Gangsta {
  static totalBullets = 100; // 공유 변수
  // 총을 쏠 때마다 총알 개수를 업데이트
  shoot() {
    Gangsta.totalBullets--;
    console.log(`Bullets left: ${Gangsta.totalBullets}`);
  }
}

const g1 = new Gangsta();
g1.shoot();

const g2 = new Gangsta();
g2.shoot();
*/

/* 코드 3.2: 싱글톤 클래스
class AppState {
  counter = 0; // 앱 상태
  private static instanceRef: AppState; // AppState의 단일 인스턴스에 대한 참조 저장
  private constructor() {} // new 키워드로 인스턴스 생성X

  // 인스턴스가 불가능한 클래스 내부 메서드를 외부에서 호출 방법?
  // => static 키워드로 클래스 메서드를 정적 메서드로 만들면
  // 특정 인스턴스가 아닌 클래스에만 속하도록 만들 수 있음
  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}
//const appState = new AppState();

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);
*/

/* 코드 3.3: super 클래스의 생성자 호출
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
}

class Employee extends Person {
  // age에 private이 없어야 오류X
  constructor(
    public firstName: string,
    public lastName: string,
    age: number,
    public department: string
  ) {
    super(firstName, lastName, age);
  }
}

const empl = new Employee("Joe", "Smith", 29, "Accounting");
*/

/* 코드 3.4: super 키워드 사용
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
  sellStock(symbol: string, numberOfShares: number) {
    console.log(`Selling ${numberOfShares} of ${symbol}`);
  }
}

class Employee extends Person {
  // age에 private이 없어야 오류X
  constructor(
    public firstName: string,
    public lastName: string,
    age: number,
    public department: string
  ) {
    super(firstName, lastName, age);
  }

  sellStock(symbol: string, shares: number) {
    super.sellStock(symbol, shares);
    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} of ${symbol}`
    );
  }
}

const empl = new Employee("Joe", "Smith", 29, "Accounting");
empl.sellStock("IBM", 100);
*/

// 코드 3.5~3.7 시작
// 코드 3.5: Person 추상 클래스
// 객체로 만들 수 없는 추상적인 개념으로 일종의 설계도 역할
abstract class Person {
  constructor(public name: string) {}

  changeAddress(newAddress: string) {
    console.log(`Changing address to ${newAddress}`);
  }

  giveDayOff() {
    console.log(`Giving a day off to ${this.name}`);
  }

  abstract increasePay(percent: number): void;

  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
  }
}

/* 코드 3.6: Person 클래스의 후손
// 자식이 생성자를 갖고 있지 않으면 부모의 생성자가 자동 호출
class Employee extends Person {
  increasePay(percent: number): void {
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor extends Person {
  increasePay(percent: number): void {
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}

// 코드 3.7: promote() 메서드 실행
const workers: Person[] = [];

workers[0] = new Employee("John");
workers[1] = new Contractor("Mary");

workers.forEach((worker) => worker.promote(5));
// 코드 3.5~3.7 끝
*/

/* 코드 3.8: 메서드 오버로딩의 잘못된 예
class ProductService {
  getProducts() {
    console.log("Getting all products");
  }
  getProducts(id: number) {
    console.log(`Getting the product info for ${id}`);
  }
}
const prodService = new ProductService();

prodService.getProducts(123);

prodService.getProducts();
*/

/* 코드 3.9: 메서드 오버로딩의 올바른 예
class ProductService {
  getProducts(): void; // 오버로드 시그니처에 리턴타입 없으면 컴파일 오류
  getProducts(id: number): void; // 오버로드 시그니처에 리턴타입 없으면 컴파일 오류
  getProducts(id?: number) {
    if (typeof id === "number") {
      console.log(`Getting the product info for ${id}`);
    } else {
      console.log("Getting all products");
    }
  }
}
const prodService = new ProductService();

prodService.getProducts(123);
prodService.getProducts();
*/

/* 코드 3.10: 파라미터 및 반환되는 타입이 서로 다른 경우
// interface 형식은 클래스 생성자 없이 사용 가능, 메서드 시그니처 선언까지 가능
interface Product {
  id: number;
  description: string;
}

class ProductService {
  getProducts(decription: string): Product[];
  getProducts(id: number): Product;
  getProducts(product: number | string): Product | Product[] {
    if (typeof product === "number") {
      console.log(`Getting the product info for id ${product}`);
      return { id: product, description: "great product" };
    } else if (typeof product === "string") {
      console.log(`Getting product with description ${product}`);
      return [
        { id: 123, description: "blue jeans" },
        { id: 789, description: "blue jeans" },
      ];
    } else {
      return {
        id: -1,
        description:
          "Error: getProducts() accept only number or string as args",
      };
    }
  }
}

const proService = new ProductService();
console.log(proService.getProducts(123));
console.log(proService.getProducts("blue jeans"));
*/

/* 코드 3.11: 오버로딩 생성자
// 매개변수가 다른 메서드 구현은 오버로딩 외에
// 함수명을 다르게 하는 방법이 있지만
// 매개변수가 다른 생성자 구현방법은 오버로딩이 유일한 방법?
// 결론: 로직 해덕 난해로 오버로딩 사용은 절제하는 것이 좋음?
class Product {
  id: number;
  description: string;
  constructor();
  constructor(id: number);
  constructor(id: number, description: string);
  constructor(id?: number, description?: string) {
    if (typeof id === "number") {
      this.id = id;
      this.description = "";
    } else {
      this.id = 0;
      this.description = "";
    }
  }
}
*/

/* 코드 3.12: 선택적 인자를 가진 단일 생성자
interface ProductProperties {
  id?: number;
  description?: string;
}

class Product {
  id: number;
  description: string;
  constructor(properties?: ProductProperties) {}
}
*/

/* 코드 3.13~3.20 시작
// 코드 3.13: MotorVehicle 인터페이스
interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number): void;
  honk(howLong: number): void;
}

// 코드 3.14: MotorVehicle 인터페이스를 클래스에 구현
class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }

  stopEngine(): boolean {
    return true;
  }

  brake(): boolean {
    return true;
  }

  accelerate(speed: number): void {
    console.log("Driving faster");
  }

  honk(howLong: number): void {
    console.log("Beep beep yeah!");
  }
}

const car = new Car();
car.startEngine();

// 코드 3.15: Flyable, Swimmable 인터페이스 선언
//interface Flyable {
//  fly(howHigh: number): void;
//  land(): void;
//}

interface Swimmable {
  swim(howFar: number): void;
}

// 코드 3.16: 3가지 인터페이스를 가진 클래스 Car => 코드 3.17에서 개선
// 일반적인 Car 클래스를 특수한 클래스로 변경 구현하게 됨
//class Car implements MotorVehicle, Flyable, Swimmable {}

// 코드 3.17: 클래스 확장과 구현
//class SecretServieCar extends Car implements Flyable, Swimmable {}

// 코드 3.18: 3가지 인터페이스를 구현하는 클래스
//class SecretServieCar implements MotorVehicle, Flyable, Swimmable {}

// 코드 3.19: 인터페이스 확장
// Flyable 인터페이스도 기본적으로 이동 수단으로 간주
interface Flyable extends MotorVehicle {
  fly(howHigh: number): void;
  land(): void;
}

// 코드 3.20: Flyable과 Swimmable을 구현한 클래스
// 코드 3.19 Flyable 인터페이스 적용
class SecretServieCar implements Flyable, Swimmable {
  // 7개 Flyable 메서드 구현
  startEngine(): boolean {
    return true;
  }
  stopEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number): void {
    console.log("Driving faster");
  }
  honk(howLong: number): void {
    console.log("Beep beep yeah!");
  }
  fly(howHigh: number): void {
    console.log(`Flying ${howHigh} feet high`);
  }
  land(): void {
    console.log("Landing. Fasten your seat belt.");
  }
  // 1개의 Swimmable 메서드 구현
  swim(howFar: number): void {
    console.log(`Swimming ${howFar} feet`);
  }
}
// 코드 3.13~3.20 끝
*/

/* 코드 3.21~22 시작
// 코드 3.21: 구현 프로그래밍
// 데이터 소스로부터 한 가지 또는 모든 제품 정보를 읽는 코드 가정
class Product {
  id: number = 0;
  description: string = "";
}
class ProductService {
  getProducts(): Product[] {
    // 모든 product 정보를 가져옴
    return [];
  }
  getProductById(id: number): Product {
    // id를 조회해 product 정보를 가져옴
    return { id: 123, description: "Good product" };
  }
}

const prodService = new ProductService();
const products = prodService.getProducts();

// 코드 3.22: MockProductServie 클래스 구현
class MockProductServie {
  getProducts(): Product[] {
    // 하드코딩된 제품 정보를 받는 코드 작성
    return [];
  }
  getProductById(id: number): Product {
    return { id: 123, description: "Not a real product" };
  }
}
// 코드 3.21~22 끝
*/

// 코드 3.23~3.24 시작
// 코드 3.23: 인터페이스 프로그래밍 시작
// 코드 3.21~22 개선
// API를 인터페이스로 선언하는 것은 곧 필요한 기능에 대해
// 오랫동안 생각한 뒤 자세하게 구현하겠다는 의미

// 커스텀 타입을 초기화할 필요 없을 때
// class 대신 interface를 사용하면 JS 코드 양이 감소
interface Product {
  id: number;
  description: string;
}
interface IProductService {
  getProducts(): Product[];
  getProductById(id: number): Product;
}

class ProductServie implements IProductService {
  getProducts(): Product[] {
    // 실제 데이터로 제품을 받음
    return [];
  }
  getProductById(id: number): Product {
    // id로 제품 조회
    return { id: 123, description: "Good product" };
  }
}

class MockProductServie implements IProductService {
  getProducts(): Product[] {
    // 하드코딩된 제품 정보를 받는 코드 작성
    return [];
  }
  getProductById(id: number): Product {
    return { id: 123, description: "Not a real product" };
  }
}
// 코드 3.23: 인터페이스 프로그래밍 끝

// 코드 3.24: 팩토리 함수
// ProductServie 또는 MockProductServie 타입 중 하나를 반환
// 다른 ProductServie 확장(기존 코드 수정X)을 위하여
// 리턴타입은 IProductService
function getProductService(isProduction: boolean): IProductService {
  if (isProduction) {
    return new ProductServie();
  } else {
    return new MockProductServie();
  }
}

const isProd = true;

const prodService: IProductService = getProductService(isProd);

const products: Product[] = prodService.getProducts();
// 코드 3.23~3.24 끝
//
