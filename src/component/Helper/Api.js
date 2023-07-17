import { useQuery } from "react-query";

export const fetchCountries = async (searchResult) => {
  let url =
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,subregion,tld,borders,flags,languages";
  if (searchResult) {
    url = `https://restcountries.com/v3.1/name/${searchResult}?fields=name,population,region,capital,flags`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useCountries = (searchResult) => {
  return useQuery(["countries", searchResult], () =>
    fetchCountries(searchResult)
  );
};
// `https://restcountries.com/v3.1/name/${searchResult}?fields=name,population,region,capital,flags`
