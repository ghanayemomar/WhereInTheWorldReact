import DetailBorders from "../component/DetailPage/DetailBorders";
import DetailInfo from "../component/DetailPage/DetailInfo";
import DetailButton from "../component/DetailPage/DetailButton";
import DetailImage from "../component/DetailPage/DetailImage";
import { useParams } from "react-router-dom";

export default function DetailPage({ countries }) {

  const params = useParams();
  const target = params.CountryName;

  const country = countries.filter((country)=>{
    return country.name.common === target ? country : "";
  });

  return (
    <div className="text-lg flex flex-col px-5 sm:px-14 md:px-28 min-h-screen dark:bg-dark-backgroundcolor dark:text-dark-textcolor bg-light-backgroundColor">
      <DetailButton />
      <div className="flex flex-col lg:flex-row justify-between">
        <DetailImage country={country[0]} />
        <div className="flex flex-col lg:w-3/6 lg:mt-28 mt-16">
          <DetailInfo country={country[0]}/>
          <DetailBorders country={country[0]}/>
        </div>
      </div>
    </div>
  );
}
