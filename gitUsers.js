//https://api.github.com/users/Payal17122000
//setting->develop setting
//token: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
//token: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

url="https://api.github.com/users"
const users=["disha-kothari","Payal17122000","disha_kothari"];
const TOKEN="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";
console.time("timer");
let jobs=[];

let methodType=1;
if (methodType===1){//promise
    users.forEach(element => {
    let job =fetch(url+"/"+element, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }})
        .then((response)=>{
            if(response.status!=200){
                return null;
            }
            else{
                return response.json();
            }
        })
        .catch((error)=>{return error})
        jobs.push(job)
    });

    Promise.allSettled([...jobs]).then((results)=>{
        for (let i=0;i<results.length;i++){
            console.log(results)
        }
        console.timeEnd("timer");   
    })
}
else if (methodType==2)//async await
{
    getUsers(users)
}
async function getUsers(names) {
    console.time("timer2") 
    for(let name of names) {
      let job = await fetch(`${url}/${name}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }}).then(
        (successResponse) => {
            if (successResponse.status!=200){
                return null
            }
            else{
                return successResponse.json();
            }
          },
          (error)=>{
            return error
          }
        )
        .then((data)=>console.log(data))
       }
    console.timeEnd("timer2")
}
