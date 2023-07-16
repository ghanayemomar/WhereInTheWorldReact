import HomePage, { loader as countires } from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { RouterProvider, createHashRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/Root";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: countires,
      },
      {
        path: "Detail-Page/:CountryName",
        element: <DetailPage />,
        loader: countires,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
