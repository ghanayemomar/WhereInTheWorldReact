import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-light-backgroundColor">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span>Oops!</span> Page {error.statusText}
              </p>
              <p className="mb-8 text-center md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link
                to="/"
                className="px-10 py-2 rounded-md bg-light-elementsColor text-xl font-semibold hover:shadow-lg"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
