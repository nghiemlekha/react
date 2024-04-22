import { useState } from "react";
function Home(){
const [count,setCount] =useState(0)
function click(){
    setCount(count+1);
   }
   return (
    <button onClick={click}>tang { count }</button>
   )
   };
   
   

export default Home;

