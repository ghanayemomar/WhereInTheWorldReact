import SearchFilterBar from "../component/HomePage/SearchFilterBar";
import CardsContainer from "../component/HomePage/CardsContainer.js";
import Favourites from "../component/HomePage/Favourites";
import { useState, useEffect, useMemo , useCallback } from "react";
import { useCountries } from "../component/Helper/Api";
import useDebounce from "../component/Helper/useDebounce";
import LoadingSpinner from "../component/General/LoadingSpinner";

export default function HomePage() {
  const [searchResult, setSearchResult] = useState("");
  const [filterResult, setFilterResult] = useState("No Filter");
  const [favorites, setFavorites] = useState([]);
  const debouncedValue = useDebounce(searchResult, 1000);

  const { data, isLoading } = useCountries(debouncedValue);
  const countries = useMemo(() => data ?? [], [data]);

  const searchInputChangeHandler = (searchResult) => {
    setSearchResult(searchResult);
  };

  const filterDropDownChangeHandler = (filterResult) => {
    setFilterResult(filterResult);
  };

  const isFavorite = useCallback((country) => {
    return favorites.some((fav) => fav.name === country.name.common);
  }, [favorites]);

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

  const filterCountries = useMemo(() => {
    if (Array.isArray(countries)) {
      return countries.filter((country) => {
        if (filterResult === "Favorite") {
          return isFavorite(country);
        } else if (filterResult === "No Filter") {
          return true;
        } else {
          return country.region === filterResult;
        }
      });
    }
    return [];
  }, [countries, filterResult, isFavorite]);

  return (
    <div className="bg-light-backgroundColor dark:bg-dark-backgroundcolor min-h-screen">
      <SearchFilterBar
        placeholder="Search for a country"
        onChangeSearch={searchInputChangeHandler}
        searchResult={searchResult}
        onChangeFilter={filterDropDownChangeHandler}
        filterResult={filterResult}
      />

      {isLoading ? (
       <LoadingSpinner/>
      ) : (
        <div className="flex flex-row px-10 md:px-28">
          <Favourites
            favorites={favorites}
            removeFavorite={removeFavorite}
            addFavorite={addFavorite}
          />
          <CardsContainer
            countries={filterCountries}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        </div>
      )}
    </div>
  );
}
