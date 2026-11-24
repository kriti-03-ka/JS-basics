//!class-blueprint of object
//shape define,different value initialize

let user1s={
    name:"",
    email:"",
    password:"",
}

class User{
    // name;
    // email;
    // password;
    #password;//?Private property
    //constructor-object lai initialized garni,inbuilt function
    constructor(name,email,password){//property define-function parameter
        this.name=name;//value
        this.email=email;
        this.#password=password;
    }
    getPassword(){
        return this.#password;
    }
    getEmail(){
        return this.email;
    }
    introduce(){
        console.log("this is user class");
    }
}

const john = new User("John Doe","John@gamil.com","123456");
const ram = new User("ram Doe","ram@gamil.com","23456");

console.log(john);
console.log(ram);
// console.log(john.#password);//error 
//consturctor lai call garnu xa vai new keywoord add garnu parxa
console.log(john.getPassword());//123456
john.introduce();


class Employee{
    #password;
    #salary;
    constructor(name,email,password,department,salary){
        this.name=name;
        this.email=email;
        this.#password=password;
        this.department=department;
        this.#salary=salary;
    }
    getPassword(){

        return this.#password;
    }
    getEmail(){
        return this.email;
    }
}
const john1 = new Employee("John1 Doe","John@gamil.com","123456","HR","1000000");
console.log(john1);

//!properties
//*private &public-private class vitra matra
//?method to call private get and set


//!student
//*Interitance--extend student children user parent
class student extends User{

   //super()-parent class lai point garni -super le
   //super()=>new User()

    constructor(name,email,password,faculty,batch,roll){
        super(name,email,password);
        this.faculty=faculty;
        this.batch=batch;
        this.roll=roll;
    }
        introduce(){
            console.log("this is student class");
        }
    }

const student1 =new student( 
    "Studnet 1",
    "styu@gmail.com",
    "1234567",
    "bcsit",
    "2006",
    "2",

)
console.log(student1);
console.log(student1.getPassword());;
console.log(student1.getEmail());
student1.introduce();//*polymorphism-name same task different


//*abstraction-chahini kura matra show garni lukauni

class Payment {
    pay(){
        console.log("implementation needed");
    }
}


//payment with khalti
class PayWithKhalti extends Payment{
pay(amount){
    this.#connect();
    this.#successConnection();
    this.#paymentStart();
    this.#auth();
    this.#paymentStart(amount);



}
//connection
#connect(){
    console.log("connecting to khalti");
}
#successConnection(){
    console.log("successfully connected")

}
#auth(){
    console.log("authentication success")
}
//start payment
#paymentStart(){
    console.log("payment proccessing")

}
//
//completion status
#paymentSuccess(amt){
    console.log(`Rs.${amt}payment success`);
}
}
const khaltiPayment =new PayWithKhalti();
khaltiPayment.pay(1000);

class MakeCoffee{


    start(){
        console.log("starting");

        this.#grinding();
        this.#heating();
        this.#processing();
        this.#despatch();

    }
    #grinding(){
        console.log("Grinding");

    }
    #heating(){
        console.log("heating");
    }
    #processing(){
        console.log("processing");
    }
    #despatch(){
        console.log("coffee is ready");
    }
}
const cm=new MakeCoffee();
cm.start();

//!class ko function ko type
//getter(specific property  ko value) and setter method(get,set)


class Circle{

    #r;
    constructor(radius){
        this.#r=radius;
    }

set radius(r){
    this.#r=r;
}

get area(){
    return( Math.PI * Math.pow(this.#r,2)).toFixed(0);

   // Math.round(2.345)//floor ,ceil
}
}
const c1=new Circle(10);
console.log(c1.area);//as a property function call garirakhnu pardaina

//setter ma euta matra parameter dina milxa
c1.radius=12;
console.log(c1.area);


//!static methods->direct class through access without making object

//*calculator
class calculator{
    static add(a,b){
        console.log(a+b);
        return a+b;
    }
    static sub(a,b){
        console.log(a-b);
        return a-b;
    }
    static divide(a,b){
        console.log(a/b);
        return a/b;
    }
    
}

calculator.add(2,1);
calculator.sub(5,3);


//multiple-• Definition: A single child class inherits features from two or more parent classes at the same time.(//?no support in java)
//?support garxa multilevel chai 
//multilevel--Definition: A child class inherits from a parent class, and then a newer class inherits from that child class, forming a sequential chain.
