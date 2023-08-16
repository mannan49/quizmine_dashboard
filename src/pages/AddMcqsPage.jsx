import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AddMcqInformation from "../components/AddMcq/AddMcqInformation";
import AddMcqContent from "../components/AddMcq/AddMcqContent";
import { createContext } from "react";
import { SharedDataProvider } from "../functions/SharedDataContext";

export const SharedDataContext = createContext();

const AddMcqsPage = () => {
  return (
    <>
      <SharedDataProvider>
        <div className="flex-grow p-4 space-y-3 overflow-y-auto">
          <SearchCard />
          <div className="flex flex-col items-center lg:flex-row lg:justify-around">
            <AddMcqInformation />
            <AddMcqContent />
          </div>
        </div>
      </SharedDataProvider>
    </>
  );
};

export default AddMcqsPage;
