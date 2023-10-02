import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import Users from './Users';
import Todos from './Todos';
 import  Reh  from './Reh';
 import Del from './Del';
  import Update from './update';
// import Postts from './Postts';
// import Posts from './posts';

function App() {
//   const [mydata, setmyData] = useState([])
//   const [iserror,setISError]=useState("")
   
//   console.log(mydata);
// useEffect(()=>{
//   axios
//   .get("https://jsonplaceholder.typicode.com/photos")
// .then((res)=>setmyData(res.data))
// .catch((error)=>setISError(error.message));
   
// },[]);
  return (
    // <div className="App">
    //    <h1>
    //     axios Tutorials
    //    </h1>
    //    {iserror!==""&& <h2>{iserror}</h2>}
    //    {mydata.map((photos)=>{
    //     const {id,title,url,thumbnailUrl}=photos;
    //     return(
    //        <div classN  ame='cards' key={id}>
    //         <h1>{id}</h1>
    //         <h3>{title.slice(0,15).toUpperCase()}</h3>
    //         <img src={thumbnailUrl} alt="thumbnail" />
    //         {/* <img src={url} alt="image" /> */}
           
    //         </div>
    //     );
    //    })}
    // </div>
    <div>
      {/* <Users />
      <Todos /> */}
      <Update/>
      <Del />
       {/* <Reh />
      <Del /> */}
    </div>
  )
}

export default App
