import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function DashboardLayout() {
  const [windowActive, setWindowActive] = useState(false);
  useEffect(() => addRequiredClass(), []);
  window.addEventListener("resize", function () {
    addRequiredClass();
  });
  function addRequiredClass() {
    if (window.innerWidth > 860) {
      setWindowActive(true);
    }
  }

  return (
    <div className="dashboard">
      <div className="flex">
        {windowActive ? <Sidebar /> : <Navbar />}
        <Outlet className="outlet" />
      </div>
    </div>
  );
}

export default DashboardLayout;
