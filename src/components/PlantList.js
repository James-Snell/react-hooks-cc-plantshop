import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    // <ul className="cards">{/* render PlantCards components in here */}</ul>
    
    //use map to iterate throught the plants array
    <ul className="cards">{data.map((plant) => (<PlantCard key={plant.id} plant={plant} />))}</ul>

  );
}

export default PlantList;
