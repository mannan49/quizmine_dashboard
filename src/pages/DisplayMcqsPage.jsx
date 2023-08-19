import React from "react";
import SearchCard from "../components/utils/SearchCard";
import ShowMcqs from "./../components/utils/ShowMcqs";

const DisplayMcqsPage = () => {
  return (
    <>
      <div className="flex-grow flex flex-col p-4 space-y-3 overflow-y-auto">
        <SearchCard />
        <div>
          <ShowMcqs />
        </div>
      </div>
    </>
  );
};

export default DisplayMcqsPage;
