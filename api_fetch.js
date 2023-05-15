const url1="https://jsonplaceholder.typicode.com/posts" //based on postid ?userId=1 otherwise/id is postid
const url2="https://jsonplaceholder.typicode.com/photos/1" //for each post 
const url3="https://jsonplaceholder.typicode.com/comments/1" //id is commentsid postId is based on querystring

const userId=[1]
let posts=[]
let comments=[]



// for (let id in userId){
//     fetch(`${url1}?userId=${userId[id]}`).
//     then((response)=>{
//        return response.json()
//     })
//     .then(data=>{
//         for(let i=0;i<data.length-1;i++){
//             let {id:postId}=data[i]
//             posts.push(data[i])
//             console.log("Posts:",data[i])
//             fetch(`${url3}?postId=${postId}`)
//             .then((response)=>{
//                 return response.json()
//             })
//             .then((data)=>{

//                 console.log("Comments:" , data)
//             })
//         }})
//         .catch((error)=>error)
// }