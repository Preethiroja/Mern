//map
function double(num){
    return num*2;
}
let a=[2,3,4,5,6,7];
let doublearr=a.map(double);
console.log(doublearr);

//map using arrow function
const triplearr=a.map((n)=>n*3);
console.log(triplearr);

function odd(num){
   return num%2==0;
}
let oddnum=a.map(odd);
console.log(oddnum);

let evennum=a.map((n)=>n%2==0);
console.log(evennum);

//using Filter 
function isodd(num){
    return num%2!=0;
}
let oddvalue=a.filter(isodd);
console.log(oddvalue);

// filter using arrow function 
let array=[14,15,20,35,27];
let five=array.filter((n)=>n%5==0);
console.log(five);

//reduce 
// reduce the array into single value
let arr=[1,2,3,4,5,6];
let sum=arr.reduce((product,current)=>{return product*current},1);
console.log(sum);

//Map filter Reduce
 let arrays=[2,3,4,5,6,7];
 let triple=arrays.map((n)=>n*3);
 console.log(triple);
 let filtervalue=triple.filter((n)=>n%3==0);
 console.log(filtervalue);
 let reduce=filtervalue.reduce((a,b)=>{return a+b},1);
 console.log(reduce);

 let ans=arrays.map((n)=>n*3).filter((n)=>n%3==0).reduce((a,b)=>{return a+b},1);
 console.log(ans);

 //destructuring
let b=[1,2,3,4,5];
const[one,two]=b;
console.log(two);

//rest operator
const[first,...rest]=b;
console.log(rest);

//spread (merge)
let num1=[0,...b,6,7,8];
console.log(num1);

const obj1={x:3,y:5};
const obj2={y:6,z:4};
const spread={...obj1,...obj2};
console.log(spread);

//promises (pending success reject) we use .then and .catch
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve('Resolved successfully');
        }else{
            reject('reject');
        }
    },2000)
});
console.log("Before promise executed");

promise
.then((result)=>console.log(result))
.catch(err=>console.log(err))
.finally(()=>console.log("Promises are completed"));
console.log('After promises execution');

fetch('https://jsonplaceholder.typicode.com/user')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((err)=>console.log(err))

//access a particular field name 
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>data.map(user=>console.log(user.name)))
      .catch((err)=>console.log(err))

//asyn and await
async function fetchapi() {
    try{
        const response=await fetch ('https://jsonplaceholder.typicode.com/users')
        const data=await response.json();
        data.map((user)=>{
            console.log(user.email
                
            )
        })
    }
    catch(error){
        console.log(error);
    }
}
fetchapi();

let name="Preethi";
let age=19;
console.log(`I am ${name} and my age is ${age}`);