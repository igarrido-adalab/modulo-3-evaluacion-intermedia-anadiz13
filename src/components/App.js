import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemon from "../data/data.json";

class App extends React.Component {
  render() {
    return <PokeList pokemon={pokemon} />;
  }
}

export default App;
