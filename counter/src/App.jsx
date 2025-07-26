import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

 let [counter ,setCounter] = useState(2)
  
 const addvalue = ()=>{
       counter = counter+1;
       setCounter(counter);
       console.log(counter)
 }
 const removeValue = ()=>{
         counter = counter-1
         setCounter(counter)
         console.log(counter);
 }
  function isdisableRemoveValue(){
       if(counter===0) return true;
        return false;
 }
  function isdisableAddValue(){
       if(counter===20) return true;
        return false;
 }
  return (  
    <>
      <h1>Nikhil God</h1>
      <h2>Counter value : {counter}</h2>

      <button disabled={isdisableAddValue()} onClick={addvalue}>Add value:{counter}</button>
      <br /><br />
      <button disabled= {isdisableRemoveValue()} onClick={ removeValue}  >Decrease value:{counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
