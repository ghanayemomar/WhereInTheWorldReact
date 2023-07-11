import React from "react";
import Card from "./Card.js";

export default function CardsContainer(props) {
  const dragStart = (e, country) => {
    let data = { name: country.name.common, flag: country.flags.svg };
    e.dataTransfer.setData("card", JSON.stringify(data));
    e.target.style.opacity = "0.5";
  };

  const dragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  return props.countries.length === 0 ? (
    <div className="text-3xl font-semibold mx-auto min-h-screen dark:text-dark-textcolor">
      No Countries Found
    </div>
  ) : (
    <div className="overflow-y-scroll md:max-h-[calc(100vh-300px)] h-screen w-4/4 sm:w-3/4 mx-auto mb-10">
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-6 md:ml-11 mb-10">
        {props.countries.map((country, index) => (
          <Card
            country={country}
            key={index}
            dragStart={dragStart}
            dragEnd={dragEnd}
            addFavorite={props.addFavorite}
            isFavorite={props.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
