import styles from'./App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {

  return (
    <center className='mt-4'>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>

      </div>
    </center>
  )
}

export default App
