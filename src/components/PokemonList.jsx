import React, { useState, useEffect } from "react";
import classes from "./PokemonList.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=18&offset=${(page - 1) * 18}`
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
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
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
      <div className={classes.pagination}>
        <button className={classes.paginationButton} onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <button className={classes.paginationButton} onClick={handleNextPage} disabled={pokemons.length < 18}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
