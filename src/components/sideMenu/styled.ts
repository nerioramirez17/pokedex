import styled from "styled-components";

export const ReadySection = styled.div`
  width: 30%;
  background-color: #d3d3d3;
  padding: 20px;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const PokemonGridReady = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;  
  }
`;
