import styled from "styled-components";

export const PokemonCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  position: relative;
`;

export const PokemonName = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

export const TrashButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
