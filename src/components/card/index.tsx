import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { AddButton, PokemonCard, PokemonName } from "./styled";
import { IPokemon } from "../../utils/models";
import { useDispatch } from "react-redux";
import { toggleSelectedPokemon } from "../../store/pokemonSlice";

interface ICard {
  pokemon: IPokemon;
  index: any;
}

const Card: React.FC<ICard> = ({ pokemon, index }: ICard) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.name}`, {
      state: {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        height: pokemon.height,
        types: pokemon.types,
        stats: pokemon.stats,
      },
    });
  };

  const handleAddButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(toggleSelectedPokemon(pokemon.id));
  };

  return (
    <PokemonCard key={index} onClick={handleCardClick}>
      <img src={pokemon.image} alt="Pokemon" />
      <PokemonName>{pokemon.name}</PokemonName>
      <AddButton onClick={handleAddButtonClick}>
        <IoIosAdd />
      </AddButton>
    </PokemonCard>
  );
};

export default Card;
