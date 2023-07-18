import { Outlet } from "react-router-dom";
import Header from "../component/General/Header";
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
