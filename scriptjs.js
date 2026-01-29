// //order of execution
// //mul
// //square
// //print 
// //main
// const mul=(a,b)=>{
//     return a*b;
// }
// const square=(n)=>{
//     return mul(n,n);
// }
// const print=(n)=>{
//     let s=square(n);
//     console.log(s);
// }
// print(4);

// //event loop
// console.log("First");
// Promise.resolve().then(console.log("From promises"))
// setTimeout(()=>{
//     console.log('Inside Timeout');
// },2000);
// console.log('Last');

const fetchApi=async()=>{
    try{
        const res=await fetch('http://localhost:4000/task/getTasks')
        const data=await res.json()
        {data.map(a=>console.log(a))}
    }catch(error){ 
        console.log(error);
    }
}
fetchApi()
