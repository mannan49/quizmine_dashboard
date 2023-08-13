import React from "react";
import SearchCard from "../components/utils/SearchCard";
import UpdateMcq from "../components/EditMcqs/UpdateMcq";

const UpdateMcqPage = () => {
  return (
    <div className="flex-grow p-4 space-y-3 overflow-y-scroll">
      <SearchCard />
      <div className="flex justify-center items-center">
        <UpdateMcq />
      </div>
    </div>
  );
};

export default UpdateMcqPage;
