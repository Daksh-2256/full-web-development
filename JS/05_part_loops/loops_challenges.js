/*
1. write a 'while' loops that calculates the sum of all numbers from 1 to 5 and stores the results in a variable named 'sum'.
*/

let sum=0;// safe not include garbage value
let i=0;

while(i<=5){
    sum=sum+i;
    i++;
}
// console.log(sum);

/*
2.write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown''.
*/
let countdown=[];
let j=5;
while(j>0){
    countdown.push(j);
    j--;
}
// console.log(countdown);


/*
    3. write a do while loop that promots a user to enter their favorite tea type until enter "stop".Stoer each tea type in an array named 'teaCollection'/
*/

// let teaCollection=[];
// let tea;
// do{
//     tea=prompt(`Enter your favourite tea(type "stop" to "finish)`)
//     if(tea!=="stop"){
//         teaCollection.push(tea)
//     }
// }
// while(tea!==stop);//this code is not support in node and is code run to go browser

/*
4. write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total.
*/
let total=0
let k=1
do{
    total+=k;
    k++;
}
while(k<=3);
// console.log(total);

/*
5. write a for loop that multiplies each element in the array [2,4,6] by 2 and stores and results in a new array named multipliedNumbers.
*/
let multipliedNumbers=[]
let numbers=[2,4,6];

for(let l=0;l<3;l++){
    takeNumbers=numbers[l]*2;
    multipliedNumbers.push(takeNumbers)
}
// console.log(multipliedNumbers);

