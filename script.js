console.log("Hello")

let object1={age:33};
let object2=object1;
object1.age=23;
console.log(object2.age); 

function sum(a,b){
    console.log( a+b);
}
sum(11,22);

const sum1=(a,b,c)=>{
    console.log(a+b+c);
}
sum1(11,12,13);