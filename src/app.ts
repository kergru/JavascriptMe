import {Person} from './Person';
import {DataStorage} from './DataStorage';
import _ from 'lodash';
import {validate} from 'class-validator';

console.log("Hello world!");

enum Role {ADMIN= 1, AUTHOR}

const person : {
  fistname: string;
  age: number;
  hobbies: string[];
  role: Role
} = {
  fistname: "Max",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

console.log(person);

function add(n1: number, n2: number): number {
  return n1 + n2;
}

let add2: (a: number, b: number) => number // function type, defines which function cam be assigned tp add2

add2 = add;

//callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 3, (result) => {
  console.log("Result: " + result);
  //throw {message: "Error occured", errorCode: 500}
});

// Spread Operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(_.shuffle(activeHobbies));

// Rest Operator
const addAll = (...numbers: number[]) => { //undefinioerte Anzahl von Parametern
  return numbers.reduce((curResult, curNumber) => {
    return curResult + curNumber;
  }, 0);
};
const addedNumbers = addAll(1,2,3,4);
console.log(addedNumbers);

// Array Destructuring
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, remainingHobbies);

// Object Destructuring
const {fistname, age} = person;
console.log(fistname, age);

abstract class Department {
  constructor(private readonly id: number, private name: string) { // shorthand Initialisierung der properties direkt im Konstruktor, this Zuweisung ist auch nicht notwendig
  }

  abstract describe(): void;

//const accounting = new Department(1, 'Accounting');
//console.log(accounting);
}

class ITDepartment extends Department {

  constructor(id: number, public admins: string[]) {
    super(id, 'IT');
  }

  get allAdmins() {
    return this.admins;
  }

  set newAdmin(val: string) {
    this.admins.push(val);
  }

  describe() {
    console.log(this);
  }
}

const itdep = new ITDepartment(2, ['admin1']);
itdep.newAdmin = 'admin2';
itdep .describe();

//Generics
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('This is done'), 2000);
});


function merge<T extends object,U>(objA: T, objB: U){
  return Object.assign(objA, objB);
};

console.log(merge({name:"x"}, {age:30}));



const dataStorage = new DataStorage<string>();
dataStorage.addItem('xx');
console.log(dataStorage.getItems());



const pers = new Person('');

//Validation
validate(pers).then(errors => {
  if(errors.length > 0) {
    console.log("Validation errors: " + errors);
  } else {
    console.log(pers);
  }
})





