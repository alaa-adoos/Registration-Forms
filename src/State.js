import React,{useState} from "react";

const State=()=>{
const [counter,setCounter]=useState(0);//initial value 
const[firstVlue,setValue]=useState("");
const increment=()=>{
    setCounter(counter+1);
}
const changeText=(e)=>
{
const newValue=e.target.value;
    setValue(newValue)
}
return(
    <div>
{counter}
<button onClick={()=> setCounter(counter+1)}>increment</button>
<button onClick={()=> setCounter(0)}>reset</button>
<input type="text" onChange={changeText} name="text"/>
{firstVlue}
    </div>
)
}
export default State;