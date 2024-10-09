import React from "react";
import { FaTrash } from "react-icons/fa";
import { PokemonCard, PokemonName, TrashButton } from "./styled";
import { IPokemon } from "../../utils/models";
import { useDispatch } from "react-redux";
import { removePokemon } from "../../store/pokemonSlice";

interface ICard {
  pokemon: IPokemon;
  index: any;
}

const CardReady: React.FC<ICard> = ({ pokemon, index }: ICard) => {
  const dispatch = useDispatch();

  const handleRemovePokemon = () => {
    dispatch(removePokemon(pokemon.id));
  };

  return (
    <PokemonCard key={index}>
      <img src={pokemon.image} alt="Pokemon" />
      <PokemonName>{pokemon.name}</PokemonName>
      <TrashButton onClick={handleRemovePokemon}>
        <FaTrash />
      </TrashButton>
    </PokemonCard>
  );
};

export default CardReady;
