import SearchFilterBar from "../component/HomePage/SearchFilterBar";
import CardsContainer from "../component/HomePage/CardsContainer.js";
import Favourites from "../component/HomePage/Favourites";
import { useState, useEffect } from "react";
import { useLoaderData, json } from "react-router-dom";

export default function HomePage(props) {
  const [searchResult, setSearchResult] = useState("");
  const [filterResult, setFilterResult] = useState("No Filter");
  const countries = useLoaderData(loader, searchResult);

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

  const filterCountries = countries.filter((country) => {
    if (filterResult === "Favorite") {
      return isFavorite(country);
    } else if (filterResult === "No Filter") {
      return true;
    } else {
      return country.region === filterResult;
    }
  });

  return (
    <div className="bg-light-backgroundColor dark:bg-dark-backgroundcolor min-h-screen">
      <SearchFilterBar
        placeholder="Search for a country"
        onChangeSearch={searchInputChangeHandler}
        searchResult={searchResult}
        onChangeFilter={filterDropDownChangeHandler}
        filterResult={filterResult}
      />

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
    </div>
  );
}

export async function loader(searchResult) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,subregion,tld,borders,flags,languages"
    );
    if (!response.ok) {
      throw new Error("Could not fetch events.");
    }

    return response;
  } catch (err) {
    throw json(
      {
        message: "Could Not Fetch Countries",
      },
      {
        status: 500,
      }
    );
  }
}
