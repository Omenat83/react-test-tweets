import { Link } from 'react-router-dom';
import { Container, NFSpan } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <NFSpan>404</NFSpan>
      <p>Sorry, we couldn't find this page :(</p>
      <Link to={'/'}>To main page</Link>
    </Container>
  );
};

export default NotFound;