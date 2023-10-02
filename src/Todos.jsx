import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Todos = () => {
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
    },[])

  return (
    <div>{ todo.map((todoapp)=>(
        <div key={todoapp.id} >
        <h1>{todoapp.id}-{todoapp.title}</h1>
        <span>{todoapp.completed ?"yes":"True"}</span>
      </div>
          )) }</div>
  )
}

export default Todos