const url1="https://jsonplaceholder.typicode.com/posts" //based on postid ?userId=1 otherwise/id is postid
const url2="https://jsonplaceholder.typicode.com/photos" //for each post 
const url3="https://jsonplaceholder.typicode.com/comments" //id is commentsid postId is based on querystring

const userId=[1]
const photosJob=[]
const commentsJob=[]
console.time("timer")
for (let id in userId){
    fetch(`${url1}?userId=${userId[id]}`).
    then((response)=>{
       return response.json()
    })
    .then(postsData=>{
        for(let i=0;i<postsData.length;i++){
            let {id:postId}=postsData[i]
            let comments=fetch(`${url3}?postId=${postId}`)
            .then((response)=>{
                return response.json()
            })
            .catch((error)=>error)

            let photos=fetch(`${url2}/${postId}`)
            .then((response)=>{
                return response.json()
            })
            .catch((error)=>error)
          
            photosJob.push(photos)
            commentsJob.push(comments)
        }
        Promise.all([...photosJob,...commentsJob])
        .then((results)=>{
                 for (let i=0;i<postsData.length;i++){
                console.log("Posts:",postsData[i])
                console.log("Photos:",results[i])
                console.log("Comments:",results[postsData.length+i])
            }
         })
         //.then(()=>console.timeEnd("timer"))
         .catch(console.log)
         .finally(()=>console.timeEnd("timer"))
        })
        .catch((error)=>error)
}

// async function apiCall(){
//     console.time("timer2")
//     for (let id in userId){
//         await fetch(`${url1}?userId=${userId[id]}`).
//         then((response)=>{
//            return response.json()
//         })
//         .then(async postsData=>{
//             for(let i=0;i<postsData.length;i++){
//                 let {id:postId}=postsData[i]
//                 let comments=fetch(`${url3}?postId=${postId}`)
//                 .then((response)=>{
//                     return response.json()
//                 })
//                 .catch((error)=>error)
    
//                 let photos= fetch(`${url2}/${postId}`)
//                 .then((response)=>{
//                     return response.json()
//                 })
//                 .catch((error)=>error)
    
//                 let res=await Promise.all([photos,comments])
//                 res.then(res=>{
//                     console.log("Posts:",postsData[i])
//                     console.log("Comments:",res[1])
//                     console.log("Photos:",res[0])
//                     }
//                 )
//             }})
//             .catch((error)=>error)
//             .finally(()=>console.timeEnd("timer2"))
//        }}

       //apiCall()