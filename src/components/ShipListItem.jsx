import { useState } from "react";

export default function ShipListItem(props) {
  return (
    <>
      <ul>
        <li>{props.name}</li>
        <li>{props.manufacturer}</li>
        <li>{props.cost}</li>
      </ul>
    </>
  );
}
