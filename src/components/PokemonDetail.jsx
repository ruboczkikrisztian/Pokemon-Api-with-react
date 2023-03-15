import classes from "./PokemonDetail.module.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PokemonDetails({ match }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
      );
      const data = await response.json();
      setPokemon(data);
    }

    fetchData();
  }, [match.params.id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={classes.pokemonImages}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className={classes.pokemonDatas}>
        <h2>{pokemon.name}</h2>
        <p>Hp: {pokemon.stats[0].base_stat}</p>
        <p>Attack: {pokemon.stats[1].base_stat}</p>
        <p>Defense: {pokemon.stats[2].base_stat}</p>
      
      </div>
      <Link className={classes.link} to={`/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default PokemonDetails;
