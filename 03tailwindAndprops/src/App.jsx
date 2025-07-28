import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
let name={
       name: "nikhil" ,
       age:20
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind CSS</h1>
        <Card username="Nikhil God"/>
        <Card username="Yash Suryawanshi"/>
    </>
  )
}

export default App
