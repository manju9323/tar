import ChilValue from './chid'
import { useState } from "react";

function Apps() {

const [todoList,setTodoList]=useState([]);
//console.log(setLst)
console.log(todoList)

const handleNew=(newarr)=>{
setTodoList([...todoList,newarr]);

}
console.log(todoList)
  
  return (
      <><ChilValue handle={handleNew}/>
      <ul>{todoList.map(ele=>  <li>{ele }</li> ) } </ul>
     
          </>
          
   
  );
}

export default Apps;
