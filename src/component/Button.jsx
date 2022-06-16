import React from 'react'

const Button = ({ as = "button", children}) => {
  const handleButtonClick = (event) => {
    console.log(event.target);
};

  switch (as){
    case "button-submit":
         return (<button type="submit" onClick={handleButtonClick} className={as}>
          {children}
          </button>
          );
    default:
         return (
          <button type="button" onClick={handleButtonClick} className={as}>
          {children}
          </button>
         );
  }
};

export default Button;