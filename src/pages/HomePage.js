import SearchFilterBar from "../component/HomePage/SearchFilterBar";
import CardsContainer from "../component/HomePage/CardsContainer.js";
import Favourites from "../component/HomePage/Favourites";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useCountries } from "../component/Helper/Api";
import useDebounce from "../component/Helper/useDebounce";
import LoadingSpinner from "../component/Shared/LoadingSpinner";
import {
  getItemsFromLocalStorage,
  setItemsToLocalStorage,
} from "../component/Helper/LocalStorage";
const Favorites = "favorites";

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

  const isFavorite = useCallback(
    (country) => {
      return favorites.includes(country.name.common);
    },
    [favorites]
  );

  const addFavorite = (event, countryName) => {
    event.preventDefault();
    event.stopPropagation();
    const isAlreadyFav = favorites.includes(countryName);
    if (!isAlreadyFav) {
      const updatedFavorites = [...favorites, countryName];
      setFavorites(updatedFavorites);
      setItemsToLocalStorage(Favorites, updatedFavorites);
    }
  };

  const removeFavorite = (event, countryName) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedFavorites = favorites.filter((fav) => fav !== countryName);
    setFavorites(updatedFavorites);
    setItemsToLocalStorage(Favorites, updatedFavorites);
  };

  useEffect(() => {
    const storedFavorites = getItemsFromLocalStorage(Favorites);
    if (storedFavorites) {
      setFavorites(storedFavorites);
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
        <LoadingSpinner />
      ) : (
        <div className="flex flex-row px-10 md:px-28">
          <Favourites
            favorites={favorites}
            removeFavorite={removeFavorite}
            addFavorite={addFavorite}
            countries={countries}
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
