//hoisting
//javascript behavior variable ra function declartion lai  scope ko top ma move garxa, tara initialized chai ja ko twi garxa 


// var x;
console.log(x);
// let x= 20;// x is not accesible, x is not deffined if it is commented
var x=30;
console.log(x);
// function declaration- completely hoist hunxa function chai
hoist();

function hoist(){
    console.log("Hoist");
}

//function expression


//let b = undefined;
// 10();//TypeError: 10 is not a function
// a();// TypeError: a is not a function
// a();
var a=function(){
    console.log("a");
};
console.log(a);
a();

//  var a= 20//TypeError: a is not a function
//  console.log(b);//ReferenceError: Cannot access 'b' before initialization
 let b=10;//hoist hunxa--temporal dead zone
console.log(b);
// console.log (c);
 const c=20;// hoist hunxa- va3riable ma use garna mildaina tdz

 //why is hoisting call stack ,extecution context
 
 //call stack-LIFO order(in which function the execution is excuting that determine its call  stack)
// pushing and pooping after the puahing the complete executiioon only poped out

 function e(){
    console.log("e");
    function f(){
        console.log("f");
        function g(){
            console.log("g")
        }
        g();
        console.log("g");
    }
    f();
 }


 //g,f,e
 //stack-> e f g
e();


//execution context
//kunai pani function execution hunu vanda aagadi environment create garxa vani teslai execution contextx vanninxa
//environment lai push garni

//two phase execution 
//phase 1:memeory creation phase-memoery allocation onlly
//Phase 2: execution phase- memory initialization and execute code

console.log(l);//undeffined -global execution context-
//complete scan garxa 
// memory allocate first garxa l  vanerra
//l lai original value 10 le replace initialized garxa
var l=10;//undefined

console.log(l);
