import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemon);
    return (
      <div>
        <ul></ul>
      </div>
    );
  }
}

export default PokeList;
