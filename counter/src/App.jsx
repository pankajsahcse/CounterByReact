import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


   let [counter, setCounter] =  useState(15) // defalut value kuch bhi oass ho sakta hai, object wagera sb

  //  let counter = 5;

  const addValue = () =>{

    // counter = counter +1;
    
    if(counter < 20){
      setCounter(counter +1)
    }
    if(counter == 20){
      alert("You have reached at high point")
    }
   
  }

  const removeValue = () =>{

    if(counter > 0){
      setCounter(counter -1);
    }
    if(counter == 0 ){
      alert("you have reached the last value")
    }

   
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter value : {counter}</h2>
     <button  onClick={addValue} >Add Value {counter} </button> <br />
     <button onClick={removeValue}> Remove Value {counter} </button>
     <p>Here also value upadate after clicked {counter} </p>
    </>
  )
}

export default App
