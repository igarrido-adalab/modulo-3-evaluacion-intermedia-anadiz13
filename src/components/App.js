import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import Pokemon from "../data/data.json";

class App extends React.Component {
  render() {
    return <PokeList pokemon={Pokemon} />;
  }
}

export default App;
