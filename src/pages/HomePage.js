import SearchFilterBar from "../component/HomePage/SearchFilterBar";
import Card from "../component/HomePage/Card";
import Favourites from "../component/HomePage/Favourites";
import { useState } from "react";

export default function HomePage(props) {
  const [searchResult, setSearchResult] = useState("");
  const [filterResult, setFilterResult] = useState("No Filter");

  const [favorites, setFavorites] = useState([]);

  const searchInputChangeHandler = (searchResult) => {
    setSearchResult(searchResult);
  };
  const filterDropDownChangeHandler = (filterResult) => {
    setFilterResult(filterResult);
  };

  const isFavorite = (country) => {
    return favorites.includes(country); // t or f
  };

  const filterCountries = props.countries.filter((country) => {
    if (filterResult === "Favorite") {
      return isFavorite(country);
    } else if (filterResult === "No Filter") {
      return true;
    } else {
      return country.region === filterResult;
    }
  });

  const addFavorite = (event, country) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedFavorites = [...favorites, country];
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (event, country) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedFavorites = favorites.filter((fav) => fav !== country);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="bg-light-backgroundColor dark:bg-dark-backgroundcolor">
      <SearchFilterBar
        placeholder="Search for a country"
        onChangeSearch={searchInputChangeHandler}
        searchResult={searchResult}
        onChangeFilter={filterDropDownChangeHandler}
        filterResult={filterResult}
      />

      <div className="flex flex-row px-10 md:px-28">
        <Favourites favorites={favorites} removeFavorite={removeFavorite} />

        <Card
          countries={filterCountries}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
}
