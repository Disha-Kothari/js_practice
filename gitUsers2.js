const TOKEN="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"
async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }}).then(
        successResponse => {
            return successResponse.json();
          }
        )
        // .then((data)=>{
        //     console.log("data",data);
        //     return data
        // })
         jobs.push(job);
    }
   let responsedArray = await Promise.all(jobs)
   console.log("responsedArray",responsedArray);
    return responsedArray;
  }

//   let results = await (jobs);
//   console.log(results)
async function fetchuser(){
    const users=["disha-kothari","Payal17122000","test"]
    results= await getUsers(users).then((data)=>data)
    console.log("respones",results);
    document.getElementById("data").innerHTML = results
}

fetchuser()