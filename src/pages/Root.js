import { Outlet } from "react-router-dom";
import Header from "../component/Header";
function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
