export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center dark:text-light-backgroundColor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-red-600 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
      <div className="ml-2 text-2xl">Loading ...</div>
    </div>
  );
}
