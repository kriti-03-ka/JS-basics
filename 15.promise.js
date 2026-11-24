// //!promise
// //*object that represents eventual or failure of async task

// //states of promise
// //*pending
// //*fulfilled
// //*rejected

// const promise= new Promise((resolve,reject)=>{
//     //fetch user
//     setTimeout(()=>{
//         resolve({message:"Promise resolved"});
//         // reject({mesage:"promise rejected"});
//     },3000);
    
// });
// console.log("start");
// console.log("promise");


// //?handling promise

// promise 
//     .then((data)=>{
//         console.log(data);
//     console.log(promise);
//     })
//     .catch((error)=>{
//         console.log(error);
//         console.log(promise);
//     });


const  fetchUser=(userId)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;//true
            console.log("user fetched");
            if (error){
              reject ({message:"User fetch failed"});
            }else{
                resolve({_id:1,name:"John Doe",email:"john@gmail.com"});
            }
            
        },4000);
    });
};

const fetchPosts=(userID)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const error=false;//true
            console.log("Post fetched");
            if (error){
              reject ({message:"Posts fetch failed"});
            }else{
                resolve({_id:1,name:"John Doe",email:"john@gmail.com"});
            }
            
        },4000);

    })
}

//?handling promise
fetchUser()
    .then((data)=>{
        console.log (data);

    })
    .catch((error)=>{
        console.log(error);
    })

    

console.log("end");