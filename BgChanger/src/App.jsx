
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200"

      style={{ backgroundColor: color }}>

        <h1 className="text-white flex justify-center pt-36 uppercase  gap-4" style={{fontWeight:200}} >Click the button for see the changes</h1>

      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "black" }}>Black</button>

          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{ backgroundColor: "pink" }}>Pink</button>

        </div>

      </div>
    </div>
  )
}

export default App
