//this
//this le function lai point garxa


// this.name="abc";//direct point
module.exports.name ="abc";//same object modify-abc 

// module.exports={
//     name:"abc",//{}-empty reassign
// };
console.log(this);

//module.exports={}
//this=>{}
//module.exports={name:''}    

// function a(){

//     console.log(this);--empty object
// }
//a();//global object

const a=()=>{
    console.log(this);
};
a();

//object method
// const user={
//     name:"jhon doe",
//     email:"jhon@gmail.com",
//     getName:function(){
//     //console.log(this.name);
//         console.log(this);//
//     },
// };

// user.getName();//user le getname vanni function lai call gariraxa jun chai this ho
//arrow function ko afno this hudaina jasle parent ko athawa afno najik ko inherit garxa


// const user={
//     name:"jhon doe",
//     email:"jhon@gmail.com",
//     getName: function(){
//         const b=()=>{
//     //console.log(this.name);
//         console.log(this);//
//     },
//     b();
//   };
// };
// user.getName();//

//function ko code matlab gardaina tara this ka bata call vairaxa kasari call vairaxa depend garxa
// const user={
//     name:"jhon doe",
//     email:"jhon@gmail.com",
//     getName: function(){
//     console.log(this.name);//undefined
//        // console.log(this);//this-object ho,currently function lai kunchai object wa function le call gariraxa
//     },
//   };
//   //user.getName();//-afno context lose garxa new contextt linxa

//   const fn=user.getName;
//   fn();


  class user{
    constructor(name,email,pass){
        this.name=name;
        this.email=email;
        this.password=pass;
    }
    getName(){
        return this.name;
    }
  }
//constructor lai new chainxa jasle empty obj lai call garxa
  const u1=new user("Ram","ram@gamil.com","123456");
  const u2=new user("Ram 1","ram@gamil.com","123456"); 
  //new =>{}<-this
  //{name:''}
  //{name:'',email:''}
  console.log(u1.getName());//
  console.log(u2.getName());//

  //!function object-special 

  function introduce(){
    console.log("introduce");
    console.log(this);
  }
   //introduce.age=10;
  //introduce();

  console.log(introduce.name);//function ko name print hunxa //c
  console.log(introduce.age);//10
//   c();//<ref *1> Object [global]

console.log(introduce.length);//0
//eutei function multiple thau ma use garna milnu pparyo

let ob={
    c:"c",
    d:"d",
}

let ob1={
   getName:function(){
    console.log(this.getName);
   }
};

    

//!apply call& bind-methods
function introduce(user){
    console.log("introduce");
    console.log(this.name,"a");//
    
}
introduce.call(user,12,13);//imediately call garxa  apply ra call le//normally
introduce.apply(user,[16,27]);//array ma pass garna parxa
const boundFn=introduce.bind(user,321,435266);//direct gardaina execute argument normally linxa 
boundFn();