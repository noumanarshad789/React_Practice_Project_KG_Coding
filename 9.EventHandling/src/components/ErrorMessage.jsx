import React from 'react'

const ErrorMessage = ({items}) => {
  return (
    <>{items.length === 0 && <h3>I am Hungry</h3>}</>
  )
}

export default ErrorMessage