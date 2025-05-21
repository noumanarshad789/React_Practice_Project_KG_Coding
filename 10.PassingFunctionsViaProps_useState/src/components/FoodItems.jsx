import React, { useState } from 'react'
import Items from './Items'

const FoodItems = ({ items }) => {

  let [activeItems , setActiveItems] = useState([]);
  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems)
  }

  return (
    <>
      <ul className='list-group'>
        {items.map((item) => 
        <Items 
        key={item} 
        bought={activeItems.includes(item)}
        handleAdd={(event) => { onBuyButton(item, event) }} 
        item={item}></Items>)}
      </ul>
    </>
  )
}

export default FoodItems
