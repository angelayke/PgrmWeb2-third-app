import React from 'react'

const Button = ({children}) => {
  const handleButtonClick = (event) => {
      console.log(event.target);
  }

    return (
    <button className='button' onClick={handleButtonClick}>{children}</button>
  )
}

export default Button