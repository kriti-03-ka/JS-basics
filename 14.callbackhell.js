// const outer= (cb)=>{
//     console.log("outer");
//     cb(10);
// };
// const child=(x)=>{
//     console.log("child",x);
// };
// // outer(child);
// outer((a)=>{
//     console.log("child",a);//child undefined
// });

// outer((y)=>{
//     console.log(y);//parent function ma j xa tei execute garxa 
//     //outer 10
// });

//!
const getUser=(callback)=>{
    console.log("fetching user");
    setTimeout(()=>{
        console.log("user fetched");
        callback(null,{
            _id:1,
            name:"Jhon Doe",
            email:"John@gmail.com",
        });
        callback({message:"User Fetched Failed"});
        
    },4000);
};

const getPosts=(userId)=>{
    setTimeout(()=>{
        console.log("Post Fetched")
        console.log([
            {
                _id:1,
                userID:userId,
                title:"post1"
            },
            {
                _id:2,
                userId:userId,
                title:"post 2",
            },
            {
                _id:3,
                userId:userId,
                title:"post 3",
            },
        ]);
    },3000);
};

console.log("start");
getUser((error,user)=>{
    if(error){
        console.log("error");
        console.log(error);
        return;
    }
    console.log(user);
    getPosts(user._id);
});
// getPosts();
console.log("end");