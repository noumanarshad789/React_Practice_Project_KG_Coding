import React from 'react'
import styles from "./Item.module.css"

const Items = ({item ,handleAdd, bought}) => {

  return (
    <li className={`list-group-item ${ bought && 'active'}`}>
      {item}
      <button className={`${styles.btns} btn btn-success`} onClick={handleAdd}>Add</button>
    </li>
  )
}

export default Items
 