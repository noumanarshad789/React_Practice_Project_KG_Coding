import { useState } from 'react'
import styles from'./App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText=== "C") {
      setCalVal("")
    }else if(buttonText==="="){
      setCalVal(eval(calVal))
    }else{
      const newDisplayVal = calVal + buttonText
      setCalVal(newDisplayVal)
      
    }
  }
  return (
    <center className='mt-4'>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

      </div>
    </center>
  )
}

export default App
