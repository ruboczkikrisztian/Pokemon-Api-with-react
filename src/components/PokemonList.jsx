import React, { useState, useEffect } from "react";
import classes from "./PokemonList.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=18"
      );
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (result) => {
          const pokemonResponse = await fetch(result.url);
          return await pokemonResponse.json();
        })
      );
      setPokemons(pokemonData);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.pokemonsDiv}>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className={classes.pokemonDatas}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>

          <Link to={`/pokemon/${pokemon.id}`}>
            <button>Select</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
