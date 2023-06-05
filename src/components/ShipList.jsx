import { useEffect, useState } from "react";
import ShipListItem from "./ShipListItem";

export default function ShipList() {
  const [shipList, setShipList] = useState([]);

  useEffect(() => {
    const getShipList = async () => {
      const listOfShips = await fetch("https://swapi.dev/api/starships");
      const data = await listOfShips.json();
      setShipList(data.results);
      console.log(data);
    };
    getShipList();
  }, [setShipList]);
  //   async function callApi() {
  //
  //   }
  //   callApi();

  return (
    <>
      <h1>Star Wars Ships</h1>
      {shipList &&
        shipList.map((ship) => {
          console.log(ship);
          return (
            <ShipListItem
              name={ship.name}
              manufacturer={ship.manufacturer}
              cost={ship.cost_in_credits}
            />
          );
        })}
    </>
  );
}
