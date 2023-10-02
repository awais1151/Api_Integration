import React from 'react'
import axios from 'axios';
function Del() {
    const deleteadd = async() =>{
        await axios.delete("https://jsonplaceholder.typicode.com/posts/2")
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <button type='button' onClick={deleteadd}>
Delete
        </button>
    </div>
  )
}


export default Del