import React, { useState } from 'react'
import axios from 'axios';

function Update() {
    const[body ,setBody]=useState("");
    const [title,setTitle]=useState("");
    const updatepost = async()=>{
        await axios.put("https://jsonplaceholder.typicode.com/posts/1",{
            id:1,
            body,
            title,
            userId:1
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div> 
  <input type='text' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
  <input type='text'placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)}/>
  <button class="btn btn-primary" type='submit' onClick={updatepost}>
    update button
  </button>
    </div>
  )
}

export default Update