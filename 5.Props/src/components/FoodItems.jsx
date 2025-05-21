import React from 'react'
import Items from './Items'

const FoodItems = ({items}) => {
  return (
    <>
    <ul className='list-group'>
      {items.map((item) => <Items key={item} item={item}></Items>) }
    </ul>
  </>
  )
}

export default FoodItems
