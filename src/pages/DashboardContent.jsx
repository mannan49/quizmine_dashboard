import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AllUsers from "../components/utils/AllUsers";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import { useSharedData } from "../functions/SharedDataContext";

const DashboardContent = () => {
  const { isLogin, setIsLogin } = useSharedData();

  console.log("Handle LogIN", isLogin);

  return (
    <div className="flex-grow p-4 space-y-3 overflow-y-auto">
      <SearchCard />
      <AllUsers />
      <div className="flex flex-col gap-4 lg:flex-row">
        <BarChart />
        <LineChart />
      </div>
    </div>
  );
};

export default DashboardContent;
