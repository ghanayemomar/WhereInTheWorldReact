export default function DetailInfo({ country }) {
  const getFieldValue = (value) => {
    return value || "No Data Found";
  };

  return (
    <>
      <div className="text-3xl font-extrabold mb-6">
        {getFieldValue(country.name?.common)}
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <ul>
            <li className="mb-2">
              <span className="font-semibold mr-2">Native Name:</span>
              {getFieldValue(
                country.name?.nativeName?.[
                  Object.keys(country.name?.nativeName)[0]
                ]?.official
              )}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Population:</span>
              {getFieldValue(country.population?.toLocaleString())}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Region:</span>
              {getFieldValue(country.region)}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Sub Region:</span>
              {getFieldValue(country.subregion)}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Capital:</span>
              {getFieldValue(country.capital?.[0])}
            </li>
          </ul>
        </div>

        <div className="md:mt-0 mt-10">
          <ul>
            <li className="mb-2">
              <span className="font-semibold mr-2">Top Level Domain:</span>
              {getFieldValue(country.tld?.[0])}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Currencies:</span>
              {getFieldValue(
                country.currencies?.[Object.keys(country.currencies)[0]]?.name
              )}
            </li>
            <li className="mb-2">
              <span className="font-semibold mr-2">Languages:</span>
              {getFieldValue(Object.values(country.languages).join(", "))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
