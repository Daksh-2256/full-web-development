//Number

let balance = 120;
let anotherBalance= new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean
let isActive=true;
let isReallyActive=new Boolean(true);//not recommended
console.log(isActive);
console.log(isReallyActive);

//null and undefined
let firstname;
console.log(firstname);
let secondname=null;
console.log(secondname);

//string

let myString="hello";
let myString1='Hola';
let username='daksh';//not matter double quotes and Singal quotes

let oldGreet = myString+" Karangiya";
console.log(oldGreet);

let greetMessage=`Hello ${username}!`;
let demoOne=`Value is ${2*2}`;
console.log(greetMessage);
console.log(demoOne);

let sm1=Symbol("Daksh");
let sm2=Symbol("Daksh");
console.log(sm1);
console.log(sm1==sm2);
