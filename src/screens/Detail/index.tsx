import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  AddButton,
  BackButton,
  Container,
  DetailSection,
  PokemonImage,
  TitleDetail,
  NamePokemon,
  TitleContainer,
  DetailContainer,
  TypesContainer,
  TypeBadge,
  LabelHeight,
  StatItem,
  StatTitle,
} from "./styled";
import SideMenu from "../../components/sideMenu";
import { removePokemon, toggleSelectedPokemon } from "../../store/pokemonSlice";
import { IPokemon } from "../../utils/models";

const Detail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, image, name, height, types, stats } = location.state || {};
  const pokemonsReady = useSelector(
    (state: any) => state.pokemon.pokemonsReady
  );

  const showDelete = pokemonsReady.some(
    (pokemon: IPokemon) => pokemon.id === id
  );

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddButtonClick = () => {
    dispatch(toggleSelectedPokemon(id));
  };

  const handleRemovePokemon = () => {
    dispatch(removePokemon(id));
  };

  return (
    <>
      <Container>
        <DetailSection>
          <BackButton onClick={handleBackClick}>← Volver</BackButton>
          <DetailContainer>
            <TitleContainer></TitleContainer>
            <PokemonImage src={image} alt={name} />
            <TitleDetail>Detalles del Pokémon</TitleDetail>
            <NamePokemon>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </NamePokemon>
            <TypesContainer>
              {types.map((type: any) => (
                <TypeBadge type={type.name}>{type.name}</TypeBadge>
              ))}
            </TypesContainer>
            <LabelHeight>HEIGHT: {height}</LabelHeight>
            {stats.map((stat: any) => (
              <StatItem key={stat.name}>
                <StatTitle>
                  <span>{stat.name.toUpperCase()}</span>
                  <span>{stat.base_stat}</span>
                </StatTitle>
                <LinearProgress
                  variant="determinate"
                  value={(stat.base_stat / 255) * 100}
                />
              </StatItem>
            ))}
          </DetailContainer>

          {showDelete ? (
            <AddButton onClick={handleRemovePokemon}>
              Borrar de la lista
            </AddButton>
          ) : (
            <AddButton onClick={handleAddButtonClick}>
              Agregar a la lista
            </AddButton>
          )}
        </DetailSection>
        <SideMenu pokemonsReady={pokemonsReady} />
      </Container>
    </>
  );
};

export default Detail;
