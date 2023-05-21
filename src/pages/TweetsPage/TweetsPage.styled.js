import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TweetsContainer = styled.div`
  max-width: 100%;
  text-align: center;
`;

export const TweetsTop = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 50px;
`
export const BackLink = styled(Link)`
  display: flex;
  gap: 7px;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;

  &:hover {
    color: #5736a3;
  }
`;