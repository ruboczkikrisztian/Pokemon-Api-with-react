import React from 'react';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:id" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}


export default App;
