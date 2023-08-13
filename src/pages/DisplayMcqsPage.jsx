import React from "react";
import SearchCard from "../components/utils/SearchCard";
import ShowMcqs from "../components/utils/ShowMcqs";

const DisplayMcqs = () => {
  return (
    <div className="flex-grow p-4 space-y-3 overflow-y-auto">
      <SearchCard />
      <ShowMcqs />
    </div>
  );
};

export default DisplayMcqs;
