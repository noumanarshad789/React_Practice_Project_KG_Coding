import React from 'react'
import styles from "./Item.module.css"

const Items = ({item}) => {

  const handleAdd = () => {
    console.log(`${item} being added.`)
  }



  return (
    <li className='list-group-item'>
      {item}
      <button className={`${styles.btns} btn btn-success`} onClick={handleAdd}>Add</button>
    </li>
  )
}

export default Items
 