//!operators
//*arithmetic operators
// ?,+,-,*,/,%,**
console.log(5 + 3); // 8
let x = 10;
let y = 5;
console.log (x+y);//15

let sum = x + y;
console.log(sum);//15
console.log("Hello " + " "+"World!");//Hello World!

//*assignment operators
//=,+=,-=,*=,/=,%=,**=
let a=10;
let b=5;
//a=a+5;//15
a+=5;//15

a+=b;//a=a+b=>20
console.log(a);//20

//*comparison operators
//==,===,!=,!==,>,<,>=,<=
//returns only boolean value
console.log(10>10);//false
console.log(10>=10);//true
console.log(10<=10);//true


let c=10;
let d="10";
console.log(c==d);//true type compare gradaina value matra compare garxa(duitei data type lai same data type ma convert garxa ani compare garxa)
console.log(c===d);//false data type ra value pani compare garxa

console.log(c!=d);//false
console.log(c!==d);//true

//*logical operators
//&&,||,!(and or not)
//returns only boolean value
console.log(true&true);//true
console.log(true&&false);//false
console.log(true||false);//true
console.log(!true);//false

//*unary operators
//++,--,typeof,!(increment,decrement,typeof,logical not)
let e=1;

//!pre
console.log(++e);//2
//!post
console.log(e++);//2
console.log(e);//3  

//ternary operator
//condition?expression1:expression2

let age=18;
age>=18?console.log("adult"):console.log("minor");//adult

let canvote =age>=18?"canvote":"cannot vote";
console.log(canvote);//canvote

//typeof operator
console.log(typeof canvote);//String
canvote=45;
console.log(typeof canvote ==="string");//false
console.log(typeof 12);//number
console.log(typeof 1.23);//number
let z=null;
console.log(typeof z);//object

//type conversion
//explicit type conversion(hamile convert garna parxa)


//string()
console.log(String(123));//"123"
console.log(Number("123"));//123
console.log(Number("abc"));//NaN not a number
console.log(Boolean("xyz"))//true
console.log(Boolean(""))//false

//implicit type conversion(hamile convert nagarda pani js le convert garxa)
console.log(5+"5");//"55"(number lai string ma convert garxa + operaator le string pani concatenate garxa)
console.log("5"-3);//2(string lai number ma convert garxa)

//truthy and falsy values
//falsy values=> false,0,"",null,undefined,NaN,empty string('')
//truthy values=> all values except falsy values    
let agee=17;
if(agee){
console.log("age is",agee);
}else{
    console.log("age is not defined");
}

let ageee=0;
if(ageee){
console.log("age is",ageee);
}else{
    console.log("age is not defined");
}

console.log(Boolean(0));//false
console.log(Boolean(""));//false












