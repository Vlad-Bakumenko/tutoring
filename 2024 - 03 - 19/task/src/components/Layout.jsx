import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;