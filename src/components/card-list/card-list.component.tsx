import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

import { Monster } from "../../App";

type CardProps = {
  monsters: Monster[];
};

export const CardList = (props: CardProps) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
