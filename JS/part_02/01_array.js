//array
const myArr=[0,1,2,3,4,5,"hello"];
const myArr2=new Array(1,2,3,4);
// console.log(myArr);
// console.log(myArr2);


// Arrat methods

const arr = [1,2,3,4];
arr.push(10);
arr.push(12);
arr.pop();
// console.log(arr);

arr.unshift(9);
// arr.shift(); remove 9 in the beginning
// console.log(arr);

// console.log(arr.includes(9));// in the arr array 9 present or not


// slice or splice

const arr2=[1,2,3,4];
console.log("A",myArr2);
const myn1=myArr2.slice(1,3);
console.log(myn1);
console.log("B",myArr2);

const myn2=myArr2.splice(1,3);
console.log(myn2);
