// let p1= new Promise(
//     function(resolve,reject){
//         //setTimeout(resolve, 100,'someValArgs');
//         setTimeout(() => {
//             //console.log("I am a Promise and I m fulfilled")
//             resolve(true)
//         }, 5000);
//     }
// );
// console.log(p1)
// p1.then(
//     value=>console.log('fulfilled:',value),
//     //(value)=>{console/log(value)}
//     error=>console.log("error:",error)
// );

// let p2= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        // console.log("I m promise and I m rejected")
//         reject(false)
//     }, 5000);  
// })
// p2.then(
//     value=>console.log(value),
//     error=>console.log(error)
// )
// p2.catch(
//     error=>console.log("error:",error)
// );


function sum(a,b)
{
        return a+b
}
function multiply(a,b){
    return a*b
}

console.log("Pattern:- 1*2*3*4,result:-" + eval(1*2*3*4))
try{
    //1*2*3*4
    console.time()
    const promise = new Promise((resolve,reject)=>resolve(1));
    promise.then((res)=>multiply(res,2))
    .then((res)=>multiply(res,3))
    .then((res)=>multiply(res,4))
    .then((res)=>console.log("Result of 1st pattern:" + res))
    console.timeEnd()
    //.catch((err)=>console.error(err))
}
catch(error){
    console.log(error)
}

console.log("Pattren:(1*2)+(3*4)+(4*5)- Res:"+ eval((1*2)+(3*4)+(4*5)))

try{
    //(1*2)+(3*4)+(4*5)
    console.time()
    const promise = new Promise((resolve,reject)=>resolve(1));
    promise.then((res)=>multiply(res,2)) //1*2
    .then((res1)=>{
        let mul2=multiply(3,4)
        return(sum(res1,mul2))
    })
    .then((res12)=>{
       let mul3= multiply(4,5)
       return(sum(mul3,res12)) 
    })
    .then((res13)=>{
        finalResult=res13
        console.log("Result of second pattern :" + finalResult)})
        console.timeEnd()
}
catch(error){
    console.log("Error:" + error)
}

try
{
    Promise.resolve()
    .then((res)=>multiply(1,2))
    .then((res1)=>{
        let mul2=multiply(3,4)
        return(sum(res1,mul2))
    })
    .then((res12)=>{
       let mul3= multiply(4,5)
       return(sum(mul3,res12)) 
    })
    .then((res13)=>{
        finalResult=res13
        console.log("Result of new pattern :" + finalResult)})
}
catch(error){
    console.log("Error:" + error)
}

var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("OK");
    }, 2000);
}).
then();

var p2 = p.then(function(data) {
    return data + " Good";
})