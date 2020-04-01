import styled from 'styled-components';
import { Container, Card, Button } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  min-width: 300px;
`;

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  width: '18rem';
  margin: 10px;
  color: #000000;
  border-radius: 5px;

  > img {
    padding: 5px;
    border-radius: 15px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
