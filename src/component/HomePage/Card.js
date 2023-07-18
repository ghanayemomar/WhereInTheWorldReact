import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useCallback } from "react";

export default function Card(props) {
  const {
    country,
    index,
    addFavorite,
    removeFavorite,
    dragStart,
    dragEnd,
    isFavorite,
  } = props;

  let name = country?.name?.common ?? "No Data Found";
  let flag = country?.flags?.svg ?? "No Data Found";
  let population = country?.population
    ? country.population.toLocaleString()
    : "No Data Found";
  let region = country?.region ?? "No Data Found";
  let capital = country?.capital?.[0] ?? "No Data Found";

  const handleAddFavorite = useCallback((event) => {
    const favoriteData = {
      name: name,
      flag: flag,
    };
    addFavorite(event, favoriteData);
  }, [name, flag, addFavorite]);

  const handleRemoveFavorite = useCallback((event) => {
    const favoriteData = {
      name: name,
      flag: flag,
    };
    removeFavorite(event, favoriteData);
  }, [name, flag, removeFavorite]);

  return (
    <Link
      to={`Detail-Page/${name}`}
      key={index}
      draggable
      onDragStart={(e) => dragStart(e, country)}
      onDragEnd={dragEnd}
      className="relative rounded shadow-xl w-full h-full dark:text-dark-textcolor dark:bg-dark-elementscolor"
    >
      <img
        className="w-full h-44 object-cover"
        src={flag}
        alt={`Flag of ${name}`}
      />
      <div className="flex flex-col justify-center px-7 py-10">
        <div className="font-extrabold text-xl mb-5">{name}</div>
        <div>
          <ul>
            <li>
              <span className="font-bold">Population: </span>
              {population}
            </li>

            <li>
              <span className="font-bold">Region: </span>
              {region}
            </li>
            <li>
              <span className="font-bold">Capital: </span>
              {capital}
            </li>
          </ul>
        </div>
      </div>
      {isFavorite(country) ? (
        <FaStar
          className="absolute md:hidden  right-5 bottom-5 text-xl"
          onClick={handleRemoveFavorite}
        />
      ) : (
        <FaRegStar
          className="absolute md:hidden right-5 bottom-5 text-xl"
          onClick={handleAddFavorite}
        />
      )}
    </Link>
  );
}
