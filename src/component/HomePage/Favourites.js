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
    props.addFavorite(e, country);
  };

  return (
    <div
      onDragOver={draggingOver}
      onDrop={dragDropped}
      className={`md:block hidden w-2/4 lg:w-1/4 shadow-lg bg-light-elementsColor h-full dark:bg-dark-elementscolor dark:text-dark-textcolor ${
        isDraggingOver ? "border-light-borderColor border-2" : ""
      }`}
    >
      <div className="px-5 pt-5 font-bold text-xl tracking-wide">Favourite</div>
      <div className="h-screen overflow-y-auto">
        <ul>
          {props.favorites.map((country, index) => (
            <li key={index}>
              <div className="flex flex-row justify-between mt-5 items-center">
                <div className="flex flex-row flex-wrap items-center">
                  <img
                    className="mx-3 w-12 rounded"
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                  />
                  <div className="overflow-hidden text-sm font-semibold">
                    {country.name}
                  </div>
                </div>
                <div>
                  <FaRegWindowClose
                    className="text-lg cursor-pointer mr-3.5"
                    onClick={(event) => props.removeFavorite(event, country)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
