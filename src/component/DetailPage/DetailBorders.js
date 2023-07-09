export default function DetailBorders({ country }) {
  const borderCountries = country.borders;
  return (
    <div className="flex flex-row items-center flex-wrap lg:mt-16 mt-10 mb-14">
      <div className="font-semibold mr-2">Border Countries:</div>
      <div>
        <ul className="flex flex-row flex-wrap">
          {borderCountries.length > 0 ? (
            borderCountries.map((country, index) => (
              <li
                key={index}
                className="bg-light-elementsColor dark:bg-dark-elementscolor mr-2 my-1 px-5 py-1 shadow"
              >
                {country}
              </li>
            ))
          ) : (
            <li className="bg-light-elementsColor dark:bg-dark-elementscolor mr-2 my-1 px-5 py-1 shadow">
              No Border For This Country
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
