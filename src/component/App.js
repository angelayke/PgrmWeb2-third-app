import IconStar from '../images/icon-star.svg';

import Container from './Container';
import Button from './Button';
import Text from './Text';
import Image from './Image';

function App() {
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
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </div>
     
      <Button as="button-submit">
        SUBMIT
      </Button>
     
    </Container>
  </div>
  );
}

export default App;
