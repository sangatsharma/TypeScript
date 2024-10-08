//primitive data types
//complex types :arrays, objects
//functions types, parameters, return types
//classes, interfaces, access modifiers, inheritance, constructors, static members

//Note:data types start with small letter

//primitive data types
//number, string, boolean, null, undefined, void
let a: number = 10;
a = 20;
console.log(a);
//a='hello'; //error

let person: string = "John";
person = "Doe";
console.log(person);

let isPresent: boolean = true;
isPresent = false;
console.log(isPresent);

let n: null = null;
let u: undefined = undefined;
console.log(n, u);

//void
function greet(): void {
  console.log("Hello");
}
greet();

//complex data types
//arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list, list2);

//objects
let person1: { name: string; age: number } = {
  name: "John",
  age: 25,
};
console.log(person1);

//functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

//classes
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let p1 = new Person("John", 25);
p1.greet(); //Hello, John

//interfaces
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person2 implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let p2 = new Person2("John", 25);
p2.greet(); //Hello, John

//access modifiers
//public, private, protected
class Person3 {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let p3 = new Person3("John", 25);
//console.log(p3.name); //error

//inheritance
class Employee extends Person3 {
  department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  work() {
    console.log(this.name + " is working");
  }
}

let emp = new Employee("John", 25, "IT");
emp.greet();
emp.work();

//static members
class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  }
}

console.log(Circle.pi);
console.log(Circle.calculateArea(5));

//generics
function echo<T>(arg: T): T {
  return arg;
}

console.log(echo("Hello").length);
console.log(echo(10).toFixed(2));
console.log(echo("Hello"));
console.log(echo(10));
console.log(echo(true));
console.log(echo({ name: "John" }));

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
let result = insertAtBeginning([1, 2, 3], 0);
console.log(result);

//generic classes
class List<T> {
  items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(): T[] {
    return this.items;
  }
}

let numbers = new List<number>();
numbers.add(1);
numbers.add(2);
console.log(numbers.get());

let names = new List<string>();
names.add("John");
names.add("Jane");
console.log(names.get());

//enums

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

//Note:enums value starts from 1
console.log(Direction.Up);//1
console.log(Direction[0]);//undefined
console.log(Direction[2]);//Down
enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction3.Up);
console.log(Direction3["Up"]);

//union types
let x: number | string;
x = 10;
console.log(x);
x = "Hello";
console.log(x);

//type aliases
type StringOrNumber = string | number;
let y: StringOrNumber;
y = 10;
console.log(y);
y = "Hello";
console.log(y);

//type assertions
let someValue: any = "Hello, TypeScript!";
let strLength: number = (<string>someValue).length;
console.log(strLength);
let strLength2: number = (someValue as string).length;
console.log(strLength2);

//never type
function error(message: string): never {
  throw new Error(message);
}

//error('Something went wrong');

//never type
function throwError(message: string): never {
  throw new Error(message);
}

//throwError('Something went wrong');

//unknown type
let notSure: unknown = 4;
console.log(notSure);
notSure = "Hello";
console.log(notSure);

//type guards
if (typeof notSure === "string") {
  console.log(notSure.toUpperCase());
}

//type guards
function isString(value: any): value is string {
  return typeof value === "string";
}

if (isString(notSure)) {
  console.log(notSure.toUpperCase());
}

//type guards
function isNumber(value: any): value is number {
  return typeof value === "number";
}

//type guards
function isStringOrNumber(value: any): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

//type guards
function printValue(value: any) {
  if (isStringOrNumber(value)) {
    console.log(value);
  }
}

printValue(10);
printValue("Hello");
printValue(true);

//type guards
function printValue2(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue2(10);
printValue2("Hello");

//Array of objects

let employees: { name: string; age: number }[] = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

console.log(employees);

//Array of objects

type Employe = { name: string; age: number };
let employees2: Employe[] = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

console.log(employees2);

//Array of objects

interface Employee1 {
  name: string;
  age: number;
}

let employees3: Employee1[] = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

console.log(employees3);

//Array of objects

class Employee2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let employees4: Employee2[] = [
  new Employee2("John", 25),
  new Employee2("Jane", 30),
];

console.log(employees4);

//type inference

let message = "Hello, TypeScript!"; //message is of type string by default due to type inference
console.log(message);
let message2 = "Hello, TypeScript!";
//message2=10; //error
//error type "number" is not assignable to type "string"

//arrow functions

let func = (name: string) => {
  console.log("Hello from ", name);
};

func("John");

//optional parameters

function add2(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

console.log(add2(10, 20));
console.log(add2(10, 20, 30));

//default parameters

function add3(a: number, b: number, c: number = 0): number {
  return a + b + c;
}

console.log(add3(10, 20));
console.log(add3(10, 20, 30));

//rest parameters

function add4(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(add4(10, 20));

//function overloading
// function add5(a: number, b: number): number;
// function add5(a: string, b: string): string;
function add5(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(add5(10, 20));
console.log(add5("Hello", "TypeScript"));
