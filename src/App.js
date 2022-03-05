import React from "react";
import "./style.css";
import NewMY from './NewMe';

export default function App(){
  const[count,setCount]=React.useState(0);
  console.log("Parent Render");
  return (
    <div>
           <button onClick={()=>setCount(count+1)}>inc </button>
           {count}
           <NewMY/>
    </div>
  );
}
