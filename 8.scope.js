//scope
//*vaiable and function access or visibility



//Global scope
//access level is high acces in any
let global_let ="global let";//blocck-esc-2006
const global_const = "global const";//block
var global_var= "global var";// global scope-function


//block scope
if (true){
    //
    let block_let="block let";
    const block_const ="block const";
    var block_var="block var";
    console.log(global_const,global_let,global_var);
}

//  let block_let="block let";// is not defined
    // const bloc_const ="block const";//block-let is not defined
    // var block_var="block var"; bloack var




//function


function scope(){
    let global_letf ="fglobal let";
    const global_constf = "fglobal const";
    var global_varf= "fglobal var";// function scope-only global

    // console.log(global_constf,global_letf,global_varf);//yo vhai show garxa
}
scope();
// console.log(global_constf,global_letf,global_varf);//let var const not defined



//lexical scope-nested scope one sope has another scope
function a(){
    let x=10;
    console.log(x);//parent scope le chilf scope access gaarna paudaina
    function b(){
        let x=11;
        console.log(x);// child scope// parent scope lai acces garna paunxa button to top
        function c(){
            console.log(x);
        }
        c();
    }
    b();
}
a();

//scope chain
function d(){
    let y=10;
    console.log(y);
    function e (){
        y=20;
        console.log(y);
        function f(){
            console.log(y);
        }
        f();
    }
    e();

}
d();


if (true){
       let z="z";// uplifting the let most common scope
    if (true){
        let z=20;
        if (true)
        console.log(z);//20
          z=40;
    }
    console.log(z);//z
}
// console.log(z);//global z//