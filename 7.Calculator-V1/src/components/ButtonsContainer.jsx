import React from 'react'
import styles from "./ButtonsContainer.module.css"



const ButtonsContainer = () => {

  const btnsContainer = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]

  return (
    <>
      <div className={styles.btnsContainer}>
        {btnsContainer.map((buttons) => <button className={styles.btn}>{buttons}</button>)}
      </div>
    </>
  )
}

export default ButtonsContainer