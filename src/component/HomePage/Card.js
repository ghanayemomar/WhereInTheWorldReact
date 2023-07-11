import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Card(props) {
  let name = props.country?.name?.common ?? "No Data Found";
  let flag = props.country?.flags?.svg ?? "No Data Found";
  let index = props.index;
  let population = props.country?.population ?? "No Data Found";
  let region = props.country?.region ?? "No Data Found";
  let capital = props.country?.capital?.[0] ?? "No Data Found";

  const handleAddFavorite = (event) => {
    const favoriteData = {
      name: name,
      flag: flag,
    };
    props.addFavorite(event, favoriteData);
  };
  const handleRemoveFavorite = (event) => {
    const favoriteData = {
      name: name,
      flag: flag,
    };
    props.removeFavorite(event, favoriteData);
  };

  return (
    <Link
      to={`Detail-Page/${name}`}
      key={index}
      draggable
      onDragStart={(e) => props.dragStart(e, props.country)}
      onDragEnd={props.dragEnd}
      className="relative rounded shadow-xl w-full h-96 dark:text-dark-textcolor dark:bg-dark-elementscolor"
    >
      <img
        className="w-full h-44 object-cover"
        src={flag}
        alt={`Flag of ${name}`}
      />
      <div className="pl-6 pt-10 text-left">
        <div className="font-extrabold text-xl mb-4">{name}</div>
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
      {props.isFavorite(props.country) ? (
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
