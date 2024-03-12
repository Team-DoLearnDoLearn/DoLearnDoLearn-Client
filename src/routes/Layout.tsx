import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <div>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
