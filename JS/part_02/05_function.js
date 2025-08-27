function sayMyName(){
    console.log("Hello");
    
}
// sayMyName();

// function addTwoNumber(n,m){
//     console.log(n+m);
    
// }

function addTwoNumber(n,m){
    let result=n+m;
    return result;
}
const result=addTwoNumber(2,3);
// console.log(result);

function calculateCartPrice(...num1){// ... is rest or spread operator
    return num1;
}
// console.log(calculateCartPrice(200,400,500));

const user={
    username:"hitsh",
    price:200
}
function handleObject(anyObject){
    console.log(`User name is${anyObject.username} and price is ${anyObject.price}.`);
    }
    handleObject(user)


