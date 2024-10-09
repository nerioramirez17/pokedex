import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  LoaderContainer,
  PokemonGrid,
  PokemonSection,
  SearchBox,
} from "./styles";
import Card from "../../components/card";
import axios from "../../utils/axiosConfig";
import { IPokemon, IStatPokemon, IType } from "../../utils/models";
import SideMenu from "../../components/sideMenu";
import { setPokemons } from "../../store/pokemonSlice";

const Home: React.FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemon.pokemons);
  const pokemonsReady = useSelector(
    (state: any) => state.pokemon.pokemonsReady
  );

  const fetchPokemons = async () => {
    try {
      setIsloading(true);
      const { data } = await axios.get("/v2/pokemon?limit=151");
      const pokemonsResult: IPokemon[] = [];
      for (const pokemonResult of data.results) {
        const detail = await axios.get(pokemonResult.url);
        pokemonsResult.push({
          id: detail.data.id,
          image: detail.data.sprites.front_default,
          name: detail.data.name,
          height: detail.data.height,
          types: detail.data.types.map((type: IType) => ({
            name: type.type.name,
          })),
          stats: detail.data.stats.map((stat: IStatPokemon) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          })),
        });
      }
      dispatch(setPokemons(pokemonsResult));
      setIsloading(false);
    } catch (error) {
      console.log("error", error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons();
    }
  }, []);

  const filteredPokemons = pokemons.filter((pokemon: IPokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <PokemonSection>
        <SearchBox
          placeholder="Buscar Pokemon"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading ? (
          <LoaderContainer>
            <ClipLoader color="#09f" size={50} />
          </LoaderContainer>
        ) : (
          <PokemonGrid>
            {filteredPokemons.map((pokemon: IPokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} index={pokemon.id} />
            ))}
          </PokemonGrid>
        )}
      </PokemonSection>
      <SideMenu pokemonsReady={pokemonsReady} />
    </Container>
  );
};

export default Home;
