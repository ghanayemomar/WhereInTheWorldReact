import CountryBorders from "../component/DetailPage/CountryBorders";
import CountryInfo from "../component/DetailPage/CountryInfo";
import BackButton from "../component/DetailPage/BackButton";
import CountryImage from "../component/DetailPage/CountryImage";
import { useParams, useLoaderData } from "react-router-dom";

export default function DetailPage() {
  const countries = useLoaderData();
  const params = useParams();
  const target = params.CountryName;

  const country = countries.filter((country) => {
    return country.name.common === target ? country : "";
  });

  return (
    <div className="text-lg flex flex-col px-5 sm:px-14 md:px-28 min-h-screen dark:bg-dark-backgroundcolor dark:text-dark-textcolor bg-light-backgroundColor">
      <BackButton />
      <div className="flex flex-col lg:flex-row justify-between">
        <CountryImage country={country[0]} />
        <div className="flex flex-col lg:w-3/6 lg:mt-28 mt-16">
          <CountryInfo country={country[0]} />
          <CountryBorders country={country[0]} />
        </div>
      </div>
    </div>
  );
}
