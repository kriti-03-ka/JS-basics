//?Object-non  premitive data type,passs by reference
//complex data structure to represent real world 
let user_name ='kriti';
let user_eamil='kriti@gamil.com';
let password ='12345'

//?object constructor /new keyword
//const ma reassign garna mildaina tara aru changes lyauna milxa
const obj= new Object(
        {name:"abc"}
);


//?object literal ->{}
const user ={
    name:"krit",
    email:"kriti@gmail.com",
};

//*accesing object properties
//dot notation-static key(space not allowed,key dynamic)
let name = user.name;
console.log(name);
console.log(user.email);
console.log(user.password);

//bracket notation[] for object accesing method-
console.log(user["email"]);

let user_key="email";
// console.log(user.user_key); use_key vanni variable aagaadi banako hunu parca
console.log(user[user_key]);//user['email']

//add 
user.address="lagankhel";
user["address"]="lagankhel";

//modify object properties
user.name="kria";

// delete object properties
delete user.email;

console.log(user);

//object methods-array ma lanni
const keys=Object.keys(user);
console.log(keys);
const values=Object.values(user);
console.log(values);

//entries()
console.log(Object.entries(user));


//pass by reference example
let x=10;
let u=x;
u=23;
console.log(x,u);

let user2={name:"lia",email:"lia@gamil.com"};
let user1=user2;
console.log(user2,user1);

user1.name="alice";
console.log(user2,user1);

//heap memory-complex data type tree haru store garni

//main memory-variable 

//object.seal()-modify garna dinxa add garna didaina


Object.seal(user);
user.name="laila";
console.log(user);
//object.freeze()-kei garna didaina

Object.freeze(user);
user.name="zacker";
console.log(user);


const students={
    Name:"Romeo",
    Roll:1,
    college:"Quest international college"
}

//add
students.subject="BCSIT";

//delete
 delete students.Roll;
 //modify
 students.subject="BHM"


console.log(students);

//todo:speed operator,rest operator,destructuring
//spreadd.op...
// let uui={
//     name:"Alice",
// }
// let user3 ={...uui,...user};
// console.log(user3);

//destructing

let{name1,email}=user;
let{name1:u_name}=u;
console.log(name,email);

//rest op...
let{name2,...rest}=user;//rest ko satta ma j rakhda ni hunxa
console.log(name2,rest);


