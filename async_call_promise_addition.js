let sum = function (n1,n2, cb) {
    setTimeout(()=> {
        cb(n1 +n2)
    }, 1000)
}
//sum(1,2, (ans)=>{console.log(ans)})
sum(1,2, (ans)=>{
    sum(ans,3,(ans)=>{
        sum(ans,4,(ans)=>{
            sum(ans,5,(ans)=>console.log(ans))
        })
    });
});
function sumAdd(n1,n2){
    //return n1+n2
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1+n2), 1000)
      });
      return promise
    // setTimeout(()=> {
    //     return (n1 +n2)
    // }, 1000)
}
//2+3+4+5
function calc(){
sumAdd(0,1)
.then(data=>{
    res1=sumAdd(data,2)//1+2
    return res1//3
})
.then((res1)=>{
    return sumAdd(res1,3)
})
.then((res2)=>{
    return sumAdd(res2,4)
})
.then((res3)=>{
    return sumAdd(res3,5)
})
.then((finalRes)=>console.log(finalRes))
}

//calc()