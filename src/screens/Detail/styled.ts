import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0; 
`;

export const DetailSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonImage = styled.img`
  width: 250px; 
  height: 250px;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const TitleDetail = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const NamePokemon = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const DetailContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding-left: 52px;
  padding-right: 52px;
`;


export const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const LabelHeight =  styled.p`
  align-items: flex-start;
  display: flex;
  font-weight: bold;
`;

export const StatItem = styled.div`
  margin-bottom: 15px;
`;

export const StatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 5px;
`;


export const TypeBadge = styled.span<{ type: string }>`
  padding: 5px 10px;
  border-radius: 15px;
  background-color: ${({ type }) => {
    switch (type) {
      case "poison": 
        return '#00BAA4'; 
      case "grass":
        return "#78C850";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "electric":
        return "#F8D030";
      default:
        return "#A8A878";
    }
  }};
  color: white;
  font-weight: bold;
  text-transform: capitalize; 
`;