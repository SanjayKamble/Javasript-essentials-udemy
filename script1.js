console.log("first");

function f1(val) {
    val.prop = val.prop + 1;
}

let obj = { prop: 1 };

f1(obj);

// console.log(obj);


let obj2 = { name: 'hello' };
let obj3 = { name: 'hello' };

// console.log(obj2 == obj3);

const obj4 = {};
obj4.name = 'surya';
obj4['last name'] = 'kamble';
obj4[2] = 179;
// console.log(obj4);
// console.log(obj4['last name']);


const obj5 = {};

const sym = Symbol();
obj5[sym] = 'foo';
obj5.bar = 'bar';

// console.log(obj5);
// console.log(sym in obj5);
console.log(typeof obj5[sym]);//string 
// console.log(Object.keys(obj5));

let num2 = 9/14;
let num3 = 5%6;

let num = 5 % 6 - 9 / (56 / 4);

// console.log(num);
// console.log(num2);
// console.log(num3);

let num4;

num4 = 4**2;

console.log(num4);
