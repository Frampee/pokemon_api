// añadimos los hook useState y el useEffect para poder hacer uso de dicho módulo
import axios from "axios";
import React, {useState, useEffect} from "react";

// Importamos los componentes que se van a renderizar en Main
import Card from '../Card'
import Form from '../Form'

const CartaPokemon = ({addPokemon}) => {
    // Desestructuramos useState para poder usar por separado sus dos propiedades
    const [input, setInput] = useState('');
    // Creamos otro state para guardar el pokemon
    const [pokemon, setPokemon] = useState({});
  
    // Creamos la función que hace la petición a la api
    useEffect( () => {
      if(input === "") {
        console.log('está vacio')
      } else {
        const getPokemon = async () => {
          try {
            // Guardamos en una variable el endpoint de la api
            const url = `https://pokeapi.co/api/v2/pokemon/${input}`
            // Hacemos la petición htttp utilizando axios
            const resp = await axios.get(url)
            // Creamos otra variable que contendrá la información del pokemon
            const data = resp.data
            // Creamos un objeto con la información que vamos a querer traer de data
            const pokemonObject = {
              id:data.id,
              name:data.name,
              image:data.sprites.front_default
            }
            // Guardamos el objeto en el estado pokemon
            setPokemon(pokemonObject)
            addPokemon(pokemon)
          } catch (error) {
            
          }
        }
        getPokemon()
      }
      // Al final de useEffect añadimos un array para que espere a que haya un cambio en el estado indicado (input) 
      }, [input]);

      useEffect( () => {
        if (Object.keys(pokemon).length !== 0) {
          const addPokemonToList = () => {
            try {
              addPokemon(pokemon)
            } catch (error) {
              
            }
        }
        addPokemonToList()
      }
        // Al final de useEffect añadimos un array para que espere a que haya un cambio en el estado indicado (input) 
        }, [pokemon]);

  return (
    <div>
        {/* Utilizamos los componentes importados anteriormente, poner por orden lógico y a card le añadimos el prop pokemon */}
        <Card pokemon={pokemon}/>
        {/* Al form le pasamos dos props que en este caso es la función que modifica a input */}
        <Form input={input} setInput={setInput}/>
    </div>
  )
};

export default CartaPokemon;
