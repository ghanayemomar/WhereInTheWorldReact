import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export default function Favourites(props) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const draggingOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const dragDropped = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const data = e.dataTransfer.getData("card");
    const country = JSON.parse(data);
    props.addFavorite(e, country.name);
  };

  return (
    <div
      onDragOver={draggingOver}
      onDrop={dragDropped}
      className={`md:block h-[calc(100vh-300px)] hidden w-2/4 lg:w-1/4 shadow-lg bg-light-elementsColor dark:bg-dark-elementscolor dark:text-dark-textcolor ${
        isDraggingOver ? "border-light-borderColor border-2" : ""
      }`}
    >
      <div className="px-5 pt-5 font-bold text-xl tracking-wide">Favourite</div>
      <div className="max-h-[calc(100vh-350px)] overflow-y-auto">
        <ul>
          {props.favorites.map((favCountryName) => {
            const country = props.countries.find(
              (c) => c.name.common === favCountryName
            );
            if (country) {
              return (
                <li key={country.name.common}>
                  <div className="flex flex-row justify-between mb-5 mt-5 items-center">
                    <div className="flex flex-row flex-wrap items-center">
                      <img
                        className="mx-3 w-12 rounded"
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                      />
                      <div className="overflow-hidden text-sm font-semibold">
                        {country.name.common}
                      </div>
                    </div>
                    <div>
                      <FaRegWindowClose
                        className="text-lg cursor-pointer mr-3.5"
                        onClick={(event) =>
                          props.removeFavorite(event, country.name.common)
                        }
                      />
                    </div>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
