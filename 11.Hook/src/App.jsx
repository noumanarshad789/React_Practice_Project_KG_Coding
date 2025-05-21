import { useState } from 'react'
import './App.css'

function App() {
  

  const [counter, setAdd] = useState(0)
  
  const addValue = () =>{
    counter < 20 && setAdd(counter + 1)
    
  }
  
  const decValue = () => {
    counter > 1 && setAdd(counter - 1)
  }



  return (
    <center>
      <h1>Counter-Project</h1>
      <p>{counter}</p>
      <button onClick={addValue}>Increment</button> 
      <br/>
      <button onClick={decValue}>Decrement</button>
     
    </center>
  )
}

export default App
