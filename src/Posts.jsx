// import { useEffect, useState } from "react";
// import axios from "axios";
// function Posts() {
//     const[post ,setPost]=useState([]);
//     useEffect(()=>{
//         const FetchPostData =async ()=>{
//             await axios.get("https://jsonplaceholder.typicode.com/posts")
//             .then((res)=>{
//                 setPost(res.data)
//             }).catch((err)=>{
//                 console.log(err);
//             })
//         }
//         FetchPostData();
//     },[])
//   return (
//     <div>{post.mao((todopost)=>(
//         <div key={todopost.id} >
//         <h1>{todopost.id}-{todopost.title}</h1>
//         <span>{todopost.body}</span>
//       </div>
//     ))}

//     </div>
//   )
// }
// export default Posts