import React from "react";

export const Tile = ({data}) => {
  return (
    <div className="tile-container">
      { Object.values(data)
        .map((value, i) => {
          return <p key={i} className={i === 1 ? 'tile-title' : 'tile'}>{value}</p>;
        }) }
    </div>
  );
};
