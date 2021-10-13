import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [addTodo,setTodo]=useState([])
  let [inpVal,setVal]=useState('')
  let handleAdd=()=>{
    // setTodo=([...addTodo,inpVal])
    addTodo.push(inpVal)
    console.log("Handle Add run")
    console.log(inpVal)
    console.log(addTodo)

  }
  const handleChange=(e)=>{
    setVal(e.target.value)
    console.log("Handle change run")
    console.log(e.target.value)
    

  }
  return (
    <div className="App">
      <h1>React ToDo App </h1>
      <input value={inpVal} onChange={handleChange} placeholder="Write your task" type="text" />
      <button onClick={handleAdd}>Add</button><br />
     
        {
          addTodo.map((val,index)=>{return <p key={index+1}>{index}:{val} <button className="btn">Delete</button><button className="btn">Update</button></p>})
        }
     
        <button>Delete All</button>
    </div>
  );
}

export default App;
