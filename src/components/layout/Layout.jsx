import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className="wrap">
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
