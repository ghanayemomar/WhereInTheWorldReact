import NavBar from "../component/NavBar";
import SearchFilterBar from "../component/SearchFilterBar";
import Card from "../component/Card";
import Favourites from "../component/Favourites";
import { useState } from "react";

export default function HomePage(props) {
  const [searchResult, setSearchResult] = useState("");
  const [filterResult, setFilterResult] = useState("No Filter");

  const searchInputChangeHandler = (searchResult) => {
    setSearchResult(searchResult);
  };
  const filterDropDownChangeHandler = (filterResult) => {
    setFilterResult(filterResult);
  };

  const filterCountries = props.countries.filter((country) => {
    return filterResult === "No Filter"
      ? true
      : country.region === filterResult;
  });

  return (
    <div class="bg-light-backgroundColor dark:bg-dark-backgroundcolor">
      <NavBar />
      <SearchFilterBar
        placeholder="Search for a country"
        onChangeSearch={searchInputChangeHandler}
        searchResult={searchResult}
        onChangeFilter={filterDropDownChangeHandler}
        filterResult={filterResult}
      />
      <div className="flex flex-row px-10 md:px-28">
        <Favourites countries={filterCountries} />
        <Card countries={filterCountries} />
      </div>
    </div>
  );
}
