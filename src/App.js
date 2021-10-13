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
    // console.log(index)
    // console.log('handle del chal gaya')
  }
  
  const handelDelAll=()=>{
    setTodo([])
    // console.log('handle del ALL chal gaya')
  }
  
  const handleEdit=(index)=>{
    inpVal=prompt("Enter the value")
    addTodo.splice(index,1,inpVal)
    setTodo([...addTodo])
    // console.log(index)
    // console.log('handle Edit chal gaya')
  }
  return (
    <div className="App">
      <h1>React ToDo App </h1>
      <input value={inpVal} onChange={handleChange} placeholder="Write your task" type="text" />
      <button className="btn green" onClick={handleAdd}>Add</button><br />
      <ul>
        {
          addTodo.map((val,index)=>{return <p key={index}>{index+1}) {val} <button onClick={()=>handleDel(index)} className="btn">Delete</button>&nbsp;&nbsp;<button onClick={()=>handleEdit(index)} className="btn  green">Edit</button></p>})
        }
     </ul>
        <button id="long" className="btn" onClick={handelDelAll}>Delete All</button>
        <div>
        <marquee behavior="scroll" direction="left">A Project Of Jawan Pakistan</marquee>
        </div>
    </div>
  );
}

export default App;
