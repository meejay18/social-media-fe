import { Outlet } from "react-router-dom";
import Header from "../Static/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
