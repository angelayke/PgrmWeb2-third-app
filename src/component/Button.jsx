import React, {useState} from 'react'

const Button = ({ as, onClick, classOnHover, children}) => {
  const [isHovered, setisHovered] = useState(false);

  //On change le state de isHovered à true
  const onMouseEnter = () => setisHovered(true);

  //On change le state de isHovered à false
  const onMouseLeave = () => setisHovered(false);

  const className = `button ${as ? as : ''} ${isHovered ? classOnHover : ""}`;

return (
  <button
  onClick={onClick}
  className = {className}
  onMouseEnter = {onMouseEnter}
  onMouseLeave = {onMouseLeave}
  >
      {children}
  </button>)
};

export default Button;