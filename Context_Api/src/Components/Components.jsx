import React ,{useContext} from 'react'
import countContext from '../context/context'
function Components() {
  
  const value = useContext(countContext)
  return (
    <div>
      Components: 
       {value.count}
    </div>
  )
}

export default Components