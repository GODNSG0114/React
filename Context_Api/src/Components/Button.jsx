import React, { useContext } from 'react'
import Components from './Components.jsx'
import countContext from '../context/context.js'
function Button() {
  const value = useContext(countContext)
  return (
    <>
     <div>
      <button
      onClick={() => value.setCount((count) => count + 1)}> <span><Components/></span>I am Button</button>
      </div>
      </>
  )
}

export default Button