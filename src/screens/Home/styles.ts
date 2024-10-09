import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

export const PokemonSection = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #f0f0f0;
  overflow-y:  auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchBox = styled.input`
  width: 80%;
  max-width: 400px;  
  padding: 10px;
  margin: 0 auto 20px;
  font-size: 16px;
  display: block;  
`;


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;


export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;  
  }
`;


