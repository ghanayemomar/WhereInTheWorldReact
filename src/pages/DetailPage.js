import DetailBorders from "../component/DetailPage/DetailBorders";
import DetailInfo from "../component/DetailPage/DetailInfo";
import DetailButton from "../component/DetailPage/DetailButton";
import DetailImage from "../component/DetailPage/DetailImage";
export default function DetailPage({ countries }) {
  return (
    <div className="text-lg flex flex-col px-5 sm:px-14 md:px-28 min-h-screen dark:bg-dark-backgroundcolor dark:text-dark-textcolor bg-light-backgroundColor">
      <DetailButton />
      <div class="flex flex-col lg:flex-row justify-between">
        <DetailImage countries={countries} />
        <div class="flex flex-col lg:w-3/6 lg:mt-28 mt-16">
          <DetailInfo />
          <DetailBorders />
        </div>
      </div>
    </div>
  );
}
