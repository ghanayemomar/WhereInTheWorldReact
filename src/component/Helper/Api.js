import { useQuery } from "react-query";
import axios from "axios";

 const fetchCountries = async (searchResult) => {
  let url =
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";
  if (searchResult) {
    url = `https://restcountries.com/v3.1/name/${searchResult}?fields=name,capital,currencies,population,region,subregion,tld,borders,flags,languages`;
  }
  const response = await axios.get(url);
  return response.data;
};
//separe them. 

export const useCountries = (searchResult) => {
  return useQuery(
    ["countries", searchResult],
    () => fetchCountries(searchResult),
    {
      staleTime: 300000,
    }
  );
};
