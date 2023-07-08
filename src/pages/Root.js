import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
