// Importamos los siguientes hooks
import { Routes, Route } from 'react-router-dom'
import React, {useState, useEffect} from "react";


// Importamos los componentes que se van a renderizar en Main
import CartaPokemon from '../CartaPokemon'
import ListaPokemon from '../ListaPokemon'

const Main = () => {
  // Variable que va a guardar la lista de pokemons
  const [pokemonList, setPokemonList] = useState([]);
  // Creamos una función que añada pokemons al array
  function addPokemon (newPokemon) {
    // Reemplazamos el array con los elementos ya existentes y el nuevo pokemon
    setPokemonList([...pokemonList,newPokemon])
  }
  return (
    <div>
      <Routes>
        {/* Le pasamos a carta pokemon la función para añadir pokemons por props */}
        <Route path="/" element={<CartaPokemon addPokemon={addPokemon} />} exact/>
        <Route path="/listapokemon" element={<ListaPokemon pokemons={pokemonList} addPokemon={addPokemon} />} exact/>
      </Routes>
    </div>
  );
};

export default Main;
