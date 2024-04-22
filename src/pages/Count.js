import { useState } from "react";
function Count(){
const [count,setCount] =useState(0)
function click(){
    setCount(count+1);
   }
   return (
    <button onClick={click}>cong { count }</button>
   )
   };
   
   

export default Count;

