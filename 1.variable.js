//dynamic typed, interpreted & single threaded language (one time only one execution only move after the complition)
console.log("Hello WOrld");
//variables
//? veriable declaration methods
//?var,let,const
//re-declare(same name vaiable with new value) is possible with var 
var a = 10;
console.log(a);
a= 56;
a="kritika";
console.log(a);

//reassign but same name variable is nnot possible to declare

let b=20;
b= 24;
//let b=34;//error
console.log(b);

// do not reassign a value to a constant variable
const c = 21;
 //c= 34; //error
console.log(c);
//compile=.exe file only after all compile
//interpreter= line by line execution
var d;
var e;
//const f; //error
console.log("end");
//let cons var hoist scope
//changes in branch