import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({data}) => {
  return (
    <div>
      { data.map((info, i) => <Tile key={i} data={info}/>) }
    </div>
  );
};
