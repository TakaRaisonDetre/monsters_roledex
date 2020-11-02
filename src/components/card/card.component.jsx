import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&180x180`}
    />
    <h3>{props.monster.name}</h3>
    <h2>{props.monster.email}</h2>
  </div>
);
