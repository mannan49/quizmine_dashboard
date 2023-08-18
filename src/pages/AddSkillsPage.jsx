import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AddChapters from "../components/AddChapters/AddChapters";
import AddNotes from "../components/AddNotes/AddNotes";

const AddSkillsPage = () => {
  return (
    <>
      <div className="flex-grow  p-4 overflow-y-auto">
        <SearchCard />
        <div className="flex flex-col lg:flex-row lg:justify-around lg:space-x-4 ">
          <AddChapters />
          <AddNotes />
        </div>
      </div>
    </>
  );
};

export default AddSkillsPage;
