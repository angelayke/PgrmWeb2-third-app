import React from 'react'

const Button = ({ as = "button", children}) => {
  switch (as){
    case "button-submit":
         return <button className={as}>{children}</button>;
    default:
         return <button className={as}>{children}</button>;
  }
  const handleButtonClick = (event) => {
      console.log(event.target);
  }

    return (
    <button className='button' onClick={handleButtonClick}>{children}</button>
  )
}


export default Button