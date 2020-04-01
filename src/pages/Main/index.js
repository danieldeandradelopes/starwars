import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { StyledContainer, StyledCard, StyledButton } from './styles';
import api from '../../services/api';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [pagesMax, setPagesMax] = useState([]);

  async function fetchData() {
    try {
      const response = await api.get('/people');
      const { results } = await response.data;
      setCharacters(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer>
      <Row>
        {characters.map((c) => (
          <StyledCard key={Math.random()}>
            <StyledCard.Img variant="top" src="https://picsum.photos/200" />
            <StyledCard.Body>
              <StyledCard.Title>{c.name}</StyledCard.Title>
              <StyledCard.Text>
                <b>Altura:</b> {c.height}
              </StyledCard.Text>
              <StyledCard.Text>
                <b>Peso:</b> {c.mass}
              </StyledCard.Text>
              <StyledButton variant="primary">Ver Detalhes</StyledButton>
            </StyledCard.Body>
          </StyledCard>
        ))}
      </Row>
    </StyledContainer>
  );
}
