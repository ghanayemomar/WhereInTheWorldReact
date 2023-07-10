import SearchFilterBar from "../component/HomePage/SearchFilterBar";
import Card from "../component/HomePage/Card";
import Favourites from "../component/HomePage/Favourites";
import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
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
    return favorites.some((fav) => fav.name === country.name.common); // t or f
  };

  const addFavorite = (event, country) => {
    event.preventDefault();
    event.stopPropagation();
    const isAlreadyFav = favorites.some((fav) => fav.name === country.name);
    if (!isAlreadyFav) {
      const updatedFavorites = [...favorites, country];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (event, country) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedFavorites = favorites.filter(
      (fav) => fav.name !== country.name
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const filterCountries = props.countries.filter((country) => {
    if (filterResult === "Favorite") {
      return isFavorite(country);
    } else if (filterResult === "No Filter") {
      return true;
    } else {
      return country.region === filterResult;
    }
  });

  return (
    <div className="bg-light-backgroundColor dark:bg-dark-backgroundcolor">
      <SearchFilterBar
        placeholder="Search for a country"
        onChangeSearch={searchInputChangeHandler}
        searchResult={searchResult}
        onChangeFilter={filterDropDownChangeHandler}
        filterResult={filterResult}
      />

      <DragDropContext>
        <div className="flex flex-row px-10 md:px-28">
          <Favourites
            favorites={favorites}
            removeFavorite={removeFavorite}
            addFavorite={addFavorite}
          />

          <Card
            countries={filterCountries}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </DragDropContext>
    </div>
  );
}
