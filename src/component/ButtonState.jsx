import {useState} from 'react';

const ButtonState = ({ as, onClick, classOnHover = "hover-btn", children }) => {
    const [isHovered, setisHovered] = useState(false);

    //On change le state de isHovered à true
    const onMouseEnter = () => setisHovered(true);

    //On change le state de isHovered à false
    const onMouseLeave = () => setisHovered(false);

    const className = `button ${as} ${isHovered ? classOnHover : ""}`;

  return (
    <button
    onClick={onClick}
    className = {className}
    onMouseEnter = {onMouseEnter}
    onMouseLeave = {onMouseLeave}
    >
        {children}
    </button>
  )
}

export default ButtonState