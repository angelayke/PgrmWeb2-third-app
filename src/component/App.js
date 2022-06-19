import IconStar from '../images/icon-star.svg';

import Container from './Container';
import Button from './Button';
import Text from './Text';
import Image from './Image';
import ButtonState from './ButtonState';

function App() {
  const handleClick = (event) => {
    console.log(event.target.value);
  }
  return (
    <div>
    <Container>
       <Image src={IconStar} alt="Icon Star"/>

      <Text as="h2">
        How did we do?
      </Text>
      <Text as="p">
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </Text>
      <div className="flex-btn">
        <Button as='button' onClick={handleClick} classOnHover='hover-btn'>1</Button>
        <Button as='button' onClick={handleClick} classOnHover='hover-btn'>2</Button>
        <Button as='button' onClick={handleClick} classOnHover='hover-btn'>3</Button>
        <Button as='button' onClick={handleClick} classOnHover='hover-btn'>4</Button>
        <Button as='button' onClick={handleClick} classOnHover='hover-btn'>5</Button>
      </div>
     
      <Button as='button-submit' classOnHover='hover-sbmt'>SUBMIT</Button>
     
    </Container>
  </div>
  );
}

export default App;
