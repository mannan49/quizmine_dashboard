import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AllUsers from "../components/utils/AllUsers";
import BarChart from "../components/Charts/BarChart";

const UsersPage = () => {
  return (
    <div className="p-4 space-y-3 overflow-y-scroll w-full ">
      <SearchCard />
      <AllUsers />
      <BarChart />
    </div>
  );
};

export default UsersPage;
