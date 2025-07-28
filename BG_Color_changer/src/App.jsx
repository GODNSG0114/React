import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"
function App() {
  const [color, setcolor] = useState('Orange')
  return (
    <>
    <div className='  w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3
            shadow-lg bg-black  px-2 py-2 rounded-2xl'>
          <button onClick={()=>setcolor('red')} className='outline-none px-4 py-1 rounded-full'  style={{backgroundColor:'red'}}> red</button>
          <button onClick={()=>setcolor('green')} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'green'}}> green</button>
          <button onClick={()=>setcolor('yellow')} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'yellow'}}> yellow</button>
          <button onClick={()=>setcolor('blue')} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'blue'}}> blue</button>
            </div>
      </div>
    </div>
    </>

  )
}

export default App
