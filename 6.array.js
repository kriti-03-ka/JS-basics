//array-number indexed-> start from 0
//single variable ma multiple data haaru store garni data structure lai 
//array literals
const  numbers=[5,6]; //single variable le length bujhxa
//array construtor/new keyword
const arr=new Array(5,6);//yesle variable nei bujhxa aas a obj storee garxa

const el =numbers[0];

console.log(arr,numbers);
//to acces the array element
console.log(numbers[numbers.length-1]);
console.log(numbers.length);

//adding new elementds in starting and ending
//from end
//*push()
 const res=numbers.push(100,45,21);
console.log(res);
//for first element add
//unshift()

numbers.unshift(12,32);

console.log(numbers);

console.log(el);

//removing element
//from end index
//pop()
numbers.pop();
const result= numbers.pop();
console.log(result);
console.log(numbers);

//from first
//shit()
numbers.shift();
console.log(numbers);

//for searching 
//includes ->return boolean
console.log(numbers.includes(100));
console.log(numbers.includes (200));

//indexOf-which index ma exist garxa

console.log(numbers.indexOf(100));//exact index
console.log(numbers.indexOf(200));//-1

//at()
console.log(numbers.at(0));//numbers [0] positive start
console.log(numbers.at(-1));//negative end
//splice
//arr_name.splice(start_index,delete_count,item1,item2,...item)
 const x =numbers.splice(3,0,456,789);
console.log(numbers);
console.log(x);
