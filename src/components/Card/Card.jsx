import React from "react";

const Card = ({pokemon}) => {
  return (
    <div>
      {/* Añadimos la información que queremos mostrar del pokemon buscado */}
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt="image" />
    </div>
  );
};

export default Card;
