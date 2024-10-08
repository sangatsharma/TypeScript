"use strict";
//primitive data types
//complex types :arrays, objects
//functions types, parameters, return types
//classes, interfaces, access modifiers, inheritance, constructors, static members
//Note:data types start with small letter
//primitive data types
//number, string, boolean, null, undefined, void
let a = 10;
a = 20;
console.log(a);
//a='hello'; //error
let person = "John";
person = "Doe";
console.log(person);
let isPresent = true;
isPresent = false;
console.log(isPresent);
let n = null;
let u = undefined;
console.log(n, u);
//void
function greet() {
    console.log("Hello");
}
greet();
//complex data types
//arrays
let list = [1, 2, 3];
let list2 = [1, 2, 3];
console.log(list, list2);
//objects
let person1 = {
    name: "John",
    age: 25,
};
console.log(person1);
//functions
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, " + this.name);
    }
}
let p1 = new Person("John", 25);
p1.greet(); //Hello, John
class Person2 {
    constructor(name, age) {
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
    constructor(name, age) {
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
    constructor(name, age, department) {
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
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
console.log(Circle.pi);
console.log(Circle.calculateArea(5));
//generics
function echo(arg) {
    return arg;
}
console.log(echo("Hello").length);
console.log(echo(10).toFixed(2));
console.log(echo("Hello"));
console.log(echo(10));
console.log(echo(true));
console.log(echo({ name: "John" }));
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
let result = insertAtBeginning([1, 2, 3], 0);
console.log(result);
//generic classes
class List {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get() {
        return this.items;
    }
}
let numbers = new List();
numbers.add(1);
numbers.add(2);
console.log(numbers.get());
let names = new List();
names.add("John");
names.add("Jane");
console.log(names.get());
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//Note:enums value starts from 1
console.log(Direction.Up); //1
console.log(Direction[0]); //undefined
console.log(Direction[2]); //Down
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up);
console.log(Direction3["Up"]);
//union types
let x;
x = 10;
console.log(x);
x = "Hello";
console.log(x);
let y;
y = 10;
console.log(y);
y = "Hello";
console.log(y);
//type assertions
let someValue = "Hello, TypeScript!";
let strLength = someValue.length;
console.log(strLength);
let strLength2 = someValue.length;
console.log(strLength2);
//never type
function error(message) {
    throw new Error(message);
}
//error('Something went wrong');
//never type
function throwError(message) {
    throw new Error(message);
}
//throwError('Something went wrong');
//unknown type
let notSure = 4;
console.log(notSure);
notSure = "Hello";
console.log(notSure);
//type guards
if (typeof notSure === "string") {
    console.log(notSure.toUpperCase());
}
//type guards
function isString(value) {
    return typeof value === "string";
}
if (isString(notSure)) {
    console.log(notSure.toUpperCase());
}
//type guards
function isNumber(value) {
    return typeof value === "number";
}
//type guards
function isStringOrNumber(value) {
    return typeof value === "string" || typeof value === "number";
}
//type guards
function printValue(value) {
    if (isStringOrNumber(value)) {
        console.log(value);
    }
}
printValue(10);
printValue("Hello");
printValue(true);
//type guards
function printValue2(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue2(10);
printValue2("Hello");
//Array of objects
let employees = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
];
console.log(employees);
let employees2 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
];
console.log(employees2);
let employees3 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
];
console.log(employees3);
//Array of objects
class Employee2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let employees4 = [
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
let func = (name) => {
    console.log("Hello from ", name);
};
func("John");
//optional parameters
function add2(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(add2(10, 20));
console.log(add2(10, 20, 30));
//default parameters
function add3(a, b, c = 0) {
    return a + b + c;
}
console.log(add3(10, 20));
console.log(add3(10, 20, 30));
//rest parameters
function add4(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(add4(10, 20));
//function overloading
// function add5(a: number, b: number): number;
// function add5(a: string, b: string): string;
function add5(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(add5(10, 20));
console.log(add5("Hello", "TypeScript"));
