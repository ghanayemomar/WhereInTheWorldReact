import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DetailButton() {
  const navigate = useNavigate();
  return (
    <div className="pt-40">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-14 py-2 dark:bg-dark-elementscolor bg-light-elementsColor shadow"
      >
        <FaArrowLeft className="inline-block mr-2" />
        <span className="font-semibold text-lg">Back</span>
      </button>
    </div>
  );
}
