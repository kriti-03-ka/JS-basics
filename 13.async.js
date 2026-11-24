//synchronous -blocking method 
//asychronous 
//call stack never wait
//for waiting and execution (setTimeout,timeout)
console.log("start");
//settimeout-timer set

 const timer_id =setTimeout(()=>{//high order function
    console.log("processing");
},1000);//stack vanda baira upload gardinxa



//  const timer_id_1 =setTimeout(()=>{//high order function
//     console.log("processing 1");
// },100);
// console.log(timer_id);

clearTimeout(timer_id);
// clearTimeout(timer_id_1);
console.log(timer_id);
// console.log(timer_id_1);
console.log("end");

//function with argument(callback,timeout,args....)
const timer_id_1 =setTimeout(
    (a,b,c)=>{//high order function
    console.log("processing 1",a,b,c);
},1000,
"A",
"B",
"12",
);
console.log(timer_id_1);//processing 1 A B 12-direct
console.log(timer_id_1._timerArgs);//[ 'A', 'B', '12' ]

//setInterval-assync
//just like a loop
//setInterval(callback,timer,...args)-timer type(sells end in 2 days)

// let i=0;
// const id=setInterval(()=>{//stack should be free otherwise it will take other time

//     if(i===10){
//         clearInterval(id);
//     }
//     console.log(i);
//   i++; 
// },2000);


// // clearInterval(id);
// console.log("end");

//functions(total seconds){

function count(totalsecond){
    let j=totalsecond;

const timer_1=setInterval(()=>{
    console.log(j);
    if(j===0){
        clearInterval(timer_1);
    }
    j--;
},1000);
}
count(60);


console.log("200".padStart(6,"0"));
const countdownTimer=(totalsec)=>{
    //
    const intervalId=setInterval(() =>{
        totalsec--;
        const hoursleft=Math.floor(totalsec/3600);
        const minLeft=Math.floor((totalsec %3600)/60);
        const secleft=totalsec %60;

        const formatHour=String(hoursleft).padStart(2,"0");
        const formatMin=String(minLeft).padStart(2,"0");
        const formatSec=String(secleft).padStart(2,"0");

        console.log(`${formatHour}:${formatMin}:${formatSec}`);

        if (totalsec <=0){
            clearInterval(intervalId);

        }

    },1000);
};
countdownTimer(60);