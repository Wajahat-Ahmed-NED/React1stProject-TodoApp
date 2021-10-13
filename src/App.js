import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [addTodo,setTodo]=useState([])
  let [inpVal,setVal]=useState('')
  let handleAdd=()=>{
    setTodo([...addTodo,inpVal])
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
    console.log(index)
    console.log('handle del chal gaya')
  }
  
  const handelDelAll=()=>{
    setTodo([])
    console.log('handle del ALL chal gaya')
  }
  
  const handleEdit=(index)=>{
    inpVal=prompt("Enter the value")
    console.log(index)
    addTodo.splice(index,1,inpVal)
    setTodo([...addTodo])
    console.log('handle Edit chal gaya')
  }
  return (
    <div className="App">
      <h1>React ToDo App </h1>
      <input value={inpVal} onChange={handleChange} placeholder="Write your task" type="text" />
      <button onClick={handleAdd}>Add</button><br />
     
        {
          addTodo.map((val,index)=>{return <p key={index}>{val} <button onClick={()=>handleDel(index)} className="btn">Delete</button>&nbsp;&nbsp;<button onClick={()=>handleEdit(index)} className="btn">Edit</button></p>})
        }
     
        <button onClick={handelDelAll}>Delete All</button>
    </div>
  );
}

export default App;
