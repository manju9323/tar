import { useState } from "react";

function ChilValue({handle})
{
const [inputVal,setinputVal]=useState("")

const handleInputChange=(e)=>{
    setinputVal(e.target.value);
    
}
const handleSubmit=()=>{
    handle(inputVal)
    setinputVal("");
        
}


return(
    <>
    <input value={inputVal} onChange={handleInputChange}/>
    <button onClick={handleSubmit}>submit </button>
    </>
)

}
export default ChilValue;