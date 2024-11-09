import { useState } from 'react';
import './App.css'
import axios from "axios"
function App() {
  const handleSubmit=async()=>{
    let api="http://localhost:8080/home";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }

  const handleSubmit1=async()=>{
    let api="http://localhost:8080/about";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }

  const handleSubmit2=async()=>{
    let api="http://localhost:8080/service";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }
  

  const handleSubmit3=async()=>{
    let api="http://localhost:8080/join";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }

  const handleSubmit4=async()=>{
    let api="http://localhost:8080/cont";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }


  return (
    <>
    <h1>Welcome TO Error Handling</h1>
    <button onClick={handleSubmit}>Home!</button>
    <button onClick={handleSubmit1}>About!</button>
    <button onClick={handleSubmit2}>Service!</button>
    <button onClick={handleSubmit3}>Join!</button>
    <button onClick={handleSubmit4} >Contact!</button>
      
    </>
  )
}

export default App
