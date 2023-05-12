//https://api.github.com/users/Payal17122000
//setting->develop setting
//token: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
//token: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

url="https://api.github.com/users"
const users=["disha-kothari","Payal17122000","test"]
const TOKEN="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"
let temp;
let jobs = [];
 console.time("start")
users.forEach(element => {
   fetch(url+"/"+element, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }})
    .then((response)=>{
        if(response.status!=200){
            return null;
        }
        else{
            return response.json();
        }
    })
    .then(data=>{jobs.push(data)})
    .catch((error)=>{return error})
});

console.log(jobs)
//temp+=jobs
console.timeEnd("start")

document.getElementById("data").innerHTML=jobs.length;
    