const url1="https://jsonplaceholder.typicode.com/posts" 
// fetch(`${url1}`+"/1")
// .then((response)=>{console.log("first then")})
// .then((response)=>{throw new Error("error")})
// .then((response)=>{console.log("third then")})
// .catch((error)=>console.log(error))
// .then((response)=>{console.log("fourth then")})
// .then((response)=>{console.log("fifth then")})
function multiply(a,b){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(a*b), 3000)
      });
      return promise
}
function multiply2(a,b){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(a*b), 3000)
      });
      return promise
}
async function sum(a,b){
    console.log("first")
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("5"), 3000)
    //   });
    
    //   let promise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("5"), 3000)
    //   });

    // let d= await promise
    // let d1= await promise1
    let d= await multiply(2,5)//.then((res=>res))
    let d1= await multiply2(5,5)//.then((res=>res))
    let result=d +d1
    console.log(result)
    console.log("Second")    
}
sum(5,6)

async function f() {
console.log("againf f11")
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 5000)
    });
  console.log("f2")
    let result = await promise; // wait until the promise resolves (*)
  console.log("f3")
    console.log(result); // "done!"
  }

  //f()