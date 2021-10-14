// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// import React, { useEffect, useRef } from "react";
import React, { useRef } from "react";


function App() {
  const searchInput = useRef(null);

  let [addTodo,setTodo]=useState([])
  let [inpVal,setVal]=useState('')
  let handleAdd=(e)=>{
    if(inpVal!=""){
    setTodo([...addTodo,inpVal])
      setVal('')
      searchInput.current.focus()
      // handleChange(e)
    
    
    }
    // //addTodo.push(inpVal)
    // console.log("Handle Add run")
    // console.log(inpVal)
    // console.log([...addTodo,inpVal])
    // console.log(addTodo)

  }
  const handleChange=(e)=>{
    setVal(e.target.value)
    // console.log("Handle change run")
    // console.log(inpVal)
    
    

  }


  const handleDel=(index)=>{
    addTodo.splice(index,1)
    setTodo([...addTodo])
    // console.log(index)
    // console.log('handle del chal gaya')
  }
  
  const handelDelAll=()=>{
    setTodo([])
    // console.log('handle del ALL chal gaya')
  }
  
  const handleEdit=(index)=>{
    const inp1=prompt("Enter the value")
    if(inp1!=null){
    addTodo.splice(index,1,inp1)
    setTodo([...addTodo])
    }
    // console.log(index)
    // console.log('handle Edit chal gaya')
  }
  return (
    <div className="App">
      <h1>React ToDo App </h1>
      <input value={inpVal}  ref={searchInput} onChange={handleChange} placeholder="Write your task" type="text" />
      <button className="btn green" onClick={handleAdd}>Add</button><br />
      <ul>
        {
          addTodo.map((val,index)=>{return <p key={index}>{index+1}) {val} <button onClick={()=>handleDel(index)} className="btn">Delete</button>&nbsp;&nbsp;<button onClick={()=>handleEdit(index)} className="btn  green">Edit</button></p>})
        }
     </ul>
        <button id="long" className="btn" onClick={handelDelAll}>Delete All</button>
        <div>
        <h2 >A Project Of Jawan Pakistan</h2>
        </div>
        {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}
        <button id="btn"><a href="#top">Top</a></button>
    </div>
  );
}

export default App;
