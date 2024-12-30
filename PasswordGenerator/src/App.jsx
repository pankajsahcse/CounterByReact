import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  // humlog ref input me kyu lete hai , user ko pta to chale ki haa vo value copy
  // ho gyi hai ya nhi, like as highlight ho jaye, select ho jaye aisa kuch


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // onclick function of button

  const copyPasswordToClipboard = useCallback(() => {

    // use of passwordRef 
    passwordRef.current?.select();
    
    // passwordRef.current?.setSelectionRange(0,3) // total value me se 3 hi select hongi

    // password is selected by this code 
    window.navigator.clipboard.writeText(password)
  }, [password])


// using the useEffect hocks for running the passwordGenerator

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-10 py-3 text-orange-500 bg-gray-800 shadow-md">
        <h1 className='text-4xl text-center text-white mb-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
          <input
            type="text"
            value={password}
            className="outline-none flex-grow py-2 px-3  bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'></div>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          /> <label htmlFor="">Length : {length} </label>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
