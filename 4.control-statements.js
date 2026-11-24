//!control flow

//!control statements

//*conditions

//?if
// let age=17
// if(age>=18){

//     console.log("can vote");//true -can vote,false error
// }

//?if-else
    let age=-1
if(age>=18){

    console.log("can vote");
}else{
    console.log("cannot vote");
}

//?else if ladder-- if block else block euta matra hunca else if jati ota ni use garna milxa

//age>=60 ->major
//age>=18 -adult
//<18 -> minor

if (age>=60){
    console.log("major");
}else if(age>=18){

    console.log("adult");
}else if(age>=1){
    console.log("minor");
}else{
    console.log("enter valid age");//annot vote enter valid age

}

//?switch case--break rakhena vani sabbai eexecute garxa
// let day =3;
// switch (day){
//  case 1:{
//     console.log("sunday");
// break;
//  }
//  case 2:{
//     console.log("monday");
//     break;
//  }
//  case 3:{
//     console.log("Tuesday");
//     break;
//  }
//  case 4:{
//     console.log("Wednesdady");
//     break;
//  }
//  case 5:{
//     console.log("Thursday");
//     break;
//  }
//  case  6:{
//     console.log("friday");
//     break;
//  }
//  case 7:{
//     console.log("Saturday");
//     break;

//  }
//  default:{
//     console.log("Enter day  between 1-7");
//  }
// }


//

let day = 7;  // change this number (1 = Monday, ..., 7 = Sunday)

switch(day) {
  case 1: // Monday
  case 7: // Sunday
    console.log("Weekend");
    break;
  case 2: // Tuesday
  case 3: // Wednesday
  case 4: // Thursday
  case 5: // Friday
  case 6: // Saturday
    console.log("Workday");
    break;
  default:
    console.log("Invalid day number");
}


//*loops

//?while--false vayo vani hudaina
let i=0;
while(i<=10){
    console.log(i);//without i++ infinite
    i++;
}

//?do while--condition false vyeni ek palta chai execute hunxa
//exxecute garxa vani check garxa
console.log("---do while");

let j = 0;
do{
    console.log(j);
    j++;
}while(j<=10);

//?for loop
console.log("---for loop")
for (let k=0;k<=10;k++){//k-- infinite
    if(k==5){
        return 5;
    //break
    //continue
    }
    
    console.log(k);
}

//todo:unit=250


//*jump/branchung keyword

//break--permanently stop
//continue --skip garxa ani arko ni print garxa
//return--function ma use hunxa kei value reutrn garnu xa vani result pass garna lai