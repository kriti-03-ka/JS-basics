//function
//resusable block of code.

//syntax
//function funtion_name(){
//function body
//}
//afai execute hudaina define garnu sathai 
//function call-invocation
//function_name()

//greet 
function greet() {
    console.log("hello world");
}

//x-> f(x)->y ,x+1

//function with input
//parameter(placeholder) & argument(variable passed)
function greeting(user) {
    
    console.log("hello",user);
}
//function with deafult  parameter

function greetings(user='Guest') {
    
    console.log("hello",user);
}

//function with double parameter
function intro(user="Guest",role="Guest"){
    console.log("hello",user,"you are",role);
}

//function with return type

function out(user="Guest",role="Guest"){
    const message = "Hello"+" "+user +".you are" + " "+role+".";
    const msg =  `Hello ${user}.You are ${role}.`;
    console.log(msg);
    console.log(message);
    return msg;
}

//adding using function
function add(a,b=1){
    return a/b;
}
const result= add(10);
console.log("Total=",result);


//function expresssion-define garera call garni let var cons use garera
 var  speak = function (user="human",role="female"){
    const msg=`Hello ${user}. you are ${role}`;
    return msg
};

console.log(speak());

let sub =function (a,b){
    //let sub =a+b;
    //return sub;
    return a-b;
}
console.log(sub(5,3));

//arrow function
//*function expression ko easy version
const divide= (a,b)=>{//function keyword ko replacement arrow
    return a/b;//direct one line ma sonvert pani garna milxa
}

console.log ( divide(22,2));
const multiply=(a,b)=>a*b;// direct return automatic aafai
console.log(multiply(5,2)); 

//*even odd
const iseven=(number)=>number %2===0 ;
console.log(iseven(3));
console.log(iseven(2));

function isodd(num){
    return num % 2!==0;
}
console.log(isodd(10));
console.log(isodd(3));


// // Arrow function to check even or odd
// const checkEvenOdd = (num) => num % 2 === 0 ? "Even" : "Odd";

// // Example usage
// console.log(checkEvenOdd(10)); // Output: Even
// console.log(checkEvenOdd(7)); 




greet();//hello world
greeting('jack');//hello jack
greeting('kria');//hello kria
greeting();//hello undefined
greetings();//hello Guest
intro('lina');//hello lina you are Guest
intro('lisa',"Admin");//hello lisa you are Admin
out();//Hello Guest. you are Guest.
const message = out("john","admin");
console.log(message);


//call back function
//function lai as a input pass garni 
//function parent body bata child lai call garxa ,tara boolean, number return gardaina,var matra garxa
const parent=(a) => {
    console.log(a);// function :child
    console.log("parent");
    a(1234);// child ma value pass
};
const child= function(b){
    console.log("child");
    console.log(b);

};
parent(child);
// parent(child());//let a= undefined



//higher order functtion
//toDO:IIFE




