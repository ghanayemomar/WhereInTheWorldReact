import CountryBorders from "../component/DetailPage/CountryBorders";
import CountryInfo from "../component/DetailPage/CountryInfo";
import BackButton from "../component/DetailPage/BackButton";
import CountryImage from "../component/DetailPage/CountryImage";
import { useParams } from "react-router-dom";
import { useCountries } from "../component/Helper/Api";
import { useMemo } from "react";

export default function DetailPage() {
  const params = useParams();
  const target = params.CountryName;

  const { data, isLoading, isError } = useCountries(target);
  const country = useMemo(() => (data ? data[0] : null), [data]);

  return (
    <div className="text-lg flex flex-col px-5 sm:px-14 md:px-28 min-h-screen dark:bg-dark-backgroundcolor dark:text-dark-textcolor bg-light-backgroundColor">
      {isLoading ? (
        <div className="mt-44 flex justify-center items-center dark:text-dark-textcolor">
          <div className="animate-spin w-12 h-12 border-4 border-current border-t-transparent rounded-full">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="ml-2 dark:text-dark-textcolor text-2xl">
            Loading...
          </div>
        </div>
      ) : (
        <>
          {isError || !country ? (
            <div className="mt-44 text-center text-3xl">
              Error fetching country...
            </div>
          ) : (
            <>
              <BackButton />
              <div className="flex flex-col lg:flex-row justify-between">
                <CountryImage country={country} />
                <div className="flex flex-col lg:w-3/6 lg:mt-28 mt-16">
                  <CountryInfo country={country} />
                  <CountryBorders country={country} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
