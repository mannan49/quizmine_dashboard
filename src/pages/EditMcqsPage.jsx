import React from "react";
import SearchCard from "../components/utils/SearchCard";
import EditMcqsInformation from "../components/EditMcqs/EditMcqsInformation";

const EditMcqsPage = () => {
  return (
    <>
      <div className="flex-grow p-4 space-y-3 overflow-y-scroll">
        <SearchCard />
        <div className="flex justify-center items-center">
          <EditMcqsInformation />
        </div>
      </div>
    </>
  );
};

export default EditMcqsPage;
