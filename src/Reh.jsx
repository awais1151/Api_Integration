import { useEffect, useState } from "react";
import axios from "axios";

function Reh() {
    const [post, setPost] = useState([]);

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const addPost = async () => {
        await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
            userId: 1
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const FetchPostData = async () => {
            await axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    setPost(res.data)
                }).catch((err) => {
                    console.log(err);
                })
        }
        FetchPostData();
    }, [])
    return (

        <div>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={addPost} type="button" >add</button>

            {post.map((todopost) => (
                <div key={todopost.id} >
                    <h1>{todopost.id}-{todopost.title}</h1>
                    <span>{todopost.body}</span>
                </div>
            ))}



        </div>
    )
}

export default Reh