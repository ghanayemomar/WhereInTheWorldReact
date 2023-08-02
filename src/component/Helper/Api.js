import { useQuery } from "react-query";
import axios from "axios";

const generateURL = (searchResult) => {
  let url =
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";
  if (searchResult) {
    url = `https://restcountries.com/v3.1/name/${searchResult}?fields=name,capital,currencies,population,region,subregion,tld,borders,flags,languages`;
  }
  return url;
};

const fetchCountries = async (searchResult) => {
  const url = generateURL(searchResult);
  const response = await axios.get(url);
  return response.data;
};

export const useCountries = (searchResult) => {
  return useQuery(
    ["countries", searchResult],
    () => fetchCountries(searchResult),
    {
      staleTime: 300000,
    }
  );
};
