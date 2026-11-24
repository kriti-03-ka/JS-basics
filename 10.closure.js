// //closure


// console.log(x);// undefined
// var x=10;

// console.log(x);//10

// // console.log(b);//ReferenceError: b is not defined

// function a(){
//     console.log(b);//undefined
//     var b=10;
// console.log(b);//10
// }

// a();
// //global:{x=10,a(){}}
// //local:{b:undefined}
// //function execution vaisake paxi function stack call delete  garxa

// //global execution call
// //stack

//closure
//kunei function le afno body bata children function execution garxa vani tyo function children le use garna paunxa

// const parent = () =>{
//     let x="parent var";

//     const children =() =>{
//         console.log(x);
//     };
//     return children;
// };
// const inner = parent();
// const inner1= parent();
// inner();
// inner();
// inner();
// inner1();

// const counter =() => {
//     let count=0;
//     const increment=() =>{
//         count++;
//         console.log(count);
//     };
//     return increment;
// };

// const c1 = counter();//{different different closure,scope}
// const c2 = counter();
// c1();//1
// c2();//1
// c1();//2
// c2();//2
// c1();//3


// const counter =() => {
//     let count=0;
//     const increment=() =>{
//         count++;
//         console.log(count);
//     };



// //decrement

// const decrement =() => {
//         count--;
//         console.log(count);
//     };
//     //get count
//     const getcount = () =>{
//         return count;
//     };
//     return {
//         increment,
//         decrement,
//         getcount,
//     };
// };

// //
// const c1=counter();
// console.log(c1);
// c1.increment();//1
// c1.increment();//2
// c1.increment();//3
// c1.decrement();//2
// console.log(c1.getcount());//2
// //

//!Acccount(acc-name,initial-amt)
//!deposite,withdraw,balance_inquary

const Account=(acc_name,initial_amt=1000)=>{
const name=acc_name;
let balance  = initial_amt;
    //*deposite
    const deposit=(amt)=>{
        if(amt<=0){
            console.log("Invalid deposit amount",amt);

                return;
        }
        balance=balance+amt;
        console.log("New balance is",balance);

    
    };
    //*withdraw

    const withdraw=(amt)=>{
if(balance-amt<=0){
    console.log("Invalid withdraw amount",amt);
    return;
}
if(balance-amt<500){
    console.log("Insufficient balance.Available balance:",balance-500);
    return;
}

        balance=balance-amt;
console.log("New balance is",balance);
    };

    //*balance_inquir
const balance_inq=()=>{
    return balance;
};

return {
    deposit,
    withdraw,
    balance_inq,

};

};

const acc1=Account("Jhon Doe",1500);
acc1.deposit(500);//2000
acc1.deposit(-1500);//2000
acc1.deposit(0);//2000
acc1.withdraw(2500);//New balance is 2500 deposite nei vairaxa(2500,-500)
acc1.withdraw(10);
console.log("balance",acc1.balance_inq());

const acc2=Account("User 2",1000);
acc2.deposit(200);

//!function factory
//closure-parent function execute vayesi ni child le use garna paunxa

const add =(a)=>{
    
    return(b)=>{
        return a+b;
    };
};
const add5=add(5);//no display-closure add5 ko lagi hunxa
const add10=add(10);//a=10;

//!caching
const outer=()=>{
    let cache={};

    return(a)=>{
        if(cache[a]){
            return cache[a];
        }
    
        console.log("calculating");
        for (let i=0;i<=9000000;i++)
{}
return a*a;
return cache[a];
        };
    };
    const square=outer();
    console.log(square(2));
      console.log(square(2));
        console.log(square(20));
           console.log(square(20));
              console.log(square(20));
                 console.log(square(20));
          console.log(square(3));

