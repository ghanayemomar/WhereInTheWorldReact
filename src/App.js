import HomePage, { loader as countires } from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { RouterProvider, createHashRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/Root";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Detail-Page/:CountryName",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
