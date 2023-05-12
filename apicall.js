//https://api.github.com/users

const url="https://api.github.com/users"
const url2="http://localhost:3000/posts"

// function json(){
//     return response.json()
// }

try{
    fetch(url)
    // .then((status)=>console.log(status))
    .then((response)=>{
        return (response.json())
    })
    .then(data => {
        console.log(data);
      })
    .catch((error)=>{console.log(error)})
}
catch(error){
    console.log(error)
}

async function logJSONData() {
    const response = await fetch(url);
    const jsonData = await response.json();
    //console.log(jsonData);
    var temp="";
    for (let i=0;i<jsonData.length;i++){
        let{login,id,type,site_admin}=jsonData[i]
        console.log(login+'|'+id+'|'+type+'|'+site_admin)
        temp+="<tr>";
        temp+="<td>"+login+"</td>";
        temp+="<td>"+type+"</td>";
        temp+="<td>"+site_admin+"</td>";
    }
    document.getElementById("data").innerHTML=temp;
}
try
{
   //logJSONData()
}
catch(error){
    console.log(error)
}
async function postData()
{
        await fetch(url2, {
        method: 'POST',
        body: JSON.stringify({
            id:7,
            login:"TestUser6",
            type:"User6",
            site_admin:false
        }),
        headers: {
           //Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        })
        .then(function(response){ 
            return response.json()})
        .then(function(data)
            {console.log(data)})
        .catch(error => console.error('Error:', error));
}
try
{
    postData()
}
catch(error){
     console.log(error)
}

