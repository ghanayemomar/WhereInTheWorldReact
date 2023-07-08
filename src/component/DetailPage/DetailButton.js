import { FaArrowLeft } from "react-icons/fa";

export default function DetailButton() {
  return (
    <div className="mt-14">
      <button className="flex items-center px-14 py-2 dark:bg-dark-elementscolor bg-light-elementsColor shadow">
        <FaArrowLeft className="inline-block mr-2" />
        <span className="font-semibold text-lg">Back</span>
      </button>
    </div>
  );
}
