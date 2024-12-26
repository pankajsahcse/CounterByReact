import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/Card'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className="text-3xl font-bold underline
      rounded-xl p-4 text-black bg-green-400">
        Hello My Dunia <br />
        Using of Tailwind CSS
      </h1>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/19650796/pexels-photo-19650796/free-photo-of-smiling-woman-shooting-confetti-cannon-sitting-in-the-living-room-by-the-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medi">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>


      {/* this is import from component folder  */}
      <div className="flex space-x-4">
        <Card username="Pankaj Pankaj Pankaj" btnText = "Click Me" />
        <Card username="Practicing" />
        <Card username="Chai" btnText = "VIsit Me" />
        <Card username="React" />
      </div>






    </>
  )
}
