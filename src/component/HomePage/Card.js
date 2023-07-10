import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card(props) {
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
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-6 md:ml-11 w-4/4 sm:w-3/4 mx-auto mb-10">
      {props.countries.map((country, index) => (
        <Link
          to={`Detail-Page/${country.name.common}`}
          key={index}
          draggable
          onDragStart={(e) => dragStart(e, country)}
          onDragEnd={dragEnd}
          className="relative rounded shadow-xl w-full h-96 dark:text-dark-textcolor dark:bg-dark-elementscolor"
        >
          <img
            className="w-full h-44 object-cover"
            src={country?.flags.svg ? country.flags.svg : ""}
            alt={`Flag of ${country.name.common}`}
          />
          <div className="pl-6 pt-10 text-left">
            <div className="font-extrabold text-xl mb-4">
              {country?.name.common ? country.name.common : "No Data Found"}
            </div>
            <div>
              <ul>
                <li>
                  <span className="font-bold">Population: </span>
                  {country?.population?.toLocaleString()
                    ? country.population.toLocaleString()
                    : "No Data Found"}
                </li>

                <li>
                  <span className="font-bold">Region: </span>
                  {country?.region ? country.region : "No Data Found"}
                </li>
                <li>
                  <span className="font-bold">Capital: </span>
                  {country?.capital[0] ? country.capital[0] : "No Data Found"}
                </li>
              </ul>
            </div>
          </div>
          {props.isFavorite(country) ? (
            <FaStar
              className="absolute block right-5 bottom-5 text-xl"
              onClick={(event) =>
                props.removeFavorite(event, {
                  name: country.name.common,
                  flag: country.flags.svg,
                })
              }
            />
          ) : (
            <FaRegStar
              className="absolute block right-5 bottom-5 text-xl"
              onClick={(event) =>
                props.addFavorite(event, {
                  name: country.name.common,
                  flag: country.flags.svg,
                })
              }
            />
          )}
        </Link>
      ))}
    </div>
  );
}
