import React, { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Card(props) {
  const setCountireFav = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-6 md:ml-11  w-4/4 sm:w-3/4 mx-auto mb-10">
      {props.countries.map((country, index) => (
        <Link
          to="/Detail-Page"
          key={index}
          className="relative rounded shadow-xl w-full h-96 dark:text-dark-textcolor dark:bg-dark-elementscolor"
        >
          <img
            className="w-full h-44 object-cover"
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
          />
          <div className="pl-6 pt-10 text-left">
            <div className="font-extrabold text-xl mb-4">
              {country.name.common}
            </div>
            <div>
              <ul>
                <li>
                  <span class="font-bold">Population: </span>
                  {country.population.toLocaleString()}
                </li>

                <li>
                  <span class="font-bold">Region: </span>
                  {country.region}
                </li>
                <li>
                  <span class="font-bold">Region: </span>

                  {country.capital[0] ? country.capital[0] : "No Data Found"}
                </li>
              </ul>
            </div>
          </div>
          <FaRegStar
            class="absolute  block right-5 bottom-5 text-xl"
            onClick={setCountireFav}
          />
        </Link>
      ))}
    </div>
  );
}
