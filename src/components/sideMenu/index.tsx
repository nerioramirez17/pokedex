import React from "react";
import { PokemonGridReady, ReadySection } from "./styled";
import { IPokemon } from "../../utils/models";
import CardReady from "../cardReady";

interface SideMenuProps {
  pokemonsReady: IPokemon[];
}

const SideMenu: React.FC<SideMenuProps> = ({ pokemonsReady }) => {
  return (
    <ReadySection>
      <h2>LISTOS PARA EL COMBATEE</h2>
      {pokemonsReady.length === 0 ? (
        <p>Lista vacía, no hay ningún pokemon listo</p>
      ) : (
        <PokemonGridReady>
          {pokemonsReady.map((pokemon: IPokemon) => (
            <CardReady key={pokemon.id} pokemon={pokemon} index={pokemon.id} />
          ))}
        </PokemonGridReady>
      )}
    </ReadySection>
  );
};

export default SideMenu;
