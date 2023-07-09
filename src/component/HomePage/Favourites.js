import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

export default function Favourites(props) {
  return (
    <div className="md:block hidden w-2/4 lg:w-1/4 shadow-lg bg-light-elementsColor dark:bg-dark-elementscolor h-screen dark:text-dark-textcolor">
      <div className="px-5 pt-5 font-bold text-xl tracking-wide">Favourite</div>

      <div>
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
