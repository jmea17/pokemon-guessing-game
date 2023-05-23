import React from "react";
import { Link } from "react-router-dom";

const GameTile = ({ game }) => {
  return (
    <div>
      <Link to={`/games/${game.id}`}>
        <p className="button-box">{game.title}</p>
      </Link>
    </div>
  );
};

export default GameTile;
