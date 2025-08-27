//global and local variable

// let a=10;
// const b=20; // <- all variable are printed
// var c=30;

if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);// a and b will not prnited but var is printed therfor don't use var

//nested scope
function one(){
    const username="daksh";
    function two(){
        const website="youtube";
        console.log(username);
        
    }
    console.log(username);
    two();
    
}
one();