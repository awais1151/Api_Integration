import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [userData,setUserData] = useState([])

    useEffect(()=>{
        const fetchUserData = async()=>{
            await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUserData(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }

        fetchUserData();
    },[])

  return (
    <>
    {userData.map((user)=>(
        <div key={user.id} style={{display:"flex",flexDirection:"column",border:"2px solid black",width:"200px",padding:"10px",margin:"10px"}}>
        <h3>{user.id}-{user.name}</h3>
        <span>{user.address.street}</span>
        <span>{user.email}</span>
        <span>{user.phone}</span>
    </div>
    ))}
</>
  )
}

export default Users