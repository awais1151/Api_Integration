import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Todo = () => {
    const [todo, setTodo] = useState([]);
    console.log(todo)
    useEffect(() => {
        const FetchUserData = async () => {
            await axios.get("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    setTodo(res.data)
                }).catch((err)=> {
                    console.log(err);
                }) 
        }
FetchUserData();
    },[]
    )
return (
    <div> 
    { todo.map((todoapp)=>(
  <div key={todoapp.id} >
  <h1>{todoapp.title}</h1>
</div>
    )) }
    <h1>helo</h1>
    
    </div>
)
}

export default Todo;