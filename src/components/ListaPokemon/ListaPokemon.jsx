import React from "react";

// Importamos los componentes que se van a renderizar en Main
import Card from '../Card'

const ListaPokemon = ({pokemons, addPokemon}) => {
  const paintPokemon = () => {  
    return pokemons.map((pokemon, i) => <Card pokemon={pokemon}/>)
  }
  return (
    <div>
      {paintPokemon()}
    </div>
  );
};

export default ListaPokemon;
