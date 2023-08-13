import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AddChapters from "../components/AddChapters/AddChapters";

const AddSkillsPage = () => {
  return (
    <>
      <div className="flex-grow flex flex-col p-4 overflow-y-auto">
        <SearchCard />
        <AddChapters className="flex-grow" />
      </div>
    </>
  );
};

export default AddSkillsPage;
