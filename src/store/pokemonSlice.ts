import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPokemon } from '../utils/models';


interface PokemonState {
    pokemons: IPokemon[];
    pokemonsReady: IPokemon[];
}

const initialState: PokemonState = {
    pokemons: [],
    pokemonsReady: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
      setPokemons(state, action: PayloadAction<IPokemon[]>) {
          state.pokemons = action.payload;
      },
      toggleSelectedPokemon(state, action: PayloadAction<number>) {
          const pokemonId = action.payload;
          const pokemon = state.pokemons.find(p => p.id === Number(pokemonId));
          if (pokemon) {
            const isAlreadyReady = state.pokemonsReady.some(p => p.id === pokemonId);
            if (!isAlreadyReady && state.pokemonsReady.length < 6) {
              state.pokemonsReady.push(pokemon);
            }
          }
        },
      removePokemon(state, action: PayloadAction<number>) {
        const pokemonId = action.payload;
        state.pokemonsReady = state.pokemonsReady.filter(p => p.id !== pokemonId);
      },
    },
});

export const { setPokemons, toggleSelectedPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
