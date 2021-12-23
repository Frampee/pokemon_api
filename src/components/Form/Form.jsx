// añadimos el useState para poder hacer uso de dicho módulo
import React, {useState} from "react";

// En el paréntesis destructuramos las props que pasamos desde el main
const Form = ({input, setInput, addPokemon}) => {
  // Definimos la función handleChange que leera lo que escribamos en nuestro input
  // const handleChange = e => setInput (e.target.value)
  // Definimos la función que hará que el botón realice la búsqueda
  const handleSubmit = e => {
    // Esto hace que no se recargue la página al dar click en el botón
    e.preventDefault()
    // Hacemos que al dar click nos mande el nombre del pokemon a main
    setInput(e.target.whatPokemon.value)
    addPokemon(e.target.whatPokemon.value)
  };
  return (
    <div>
      {/* Eliminamos lo contenido dentro del div y metemos nuestro contenido */}
      <form onSubmit={handleSubmit}>
        {/* El value nos pone en input lo que esté en state y onChange es para que cuando cambie el input se actualice */}
        <input type="text" name="whatPokemon" placeholder="Busca tu Pokemon" />
        <input type="submit" value="Buscar"/>
      </form>
    </div>
  );
};

export default Form;
