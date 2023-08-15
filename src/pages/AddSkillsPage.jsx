import React from "react";
import SearchCard from "../components/utils/SearchCard";
import AddChapters from "../components/AddChapters/AddChapters";
import AddNotes from "../components/AddNotes/AddNotes";

const AddSkillsPage = () => {
  return (
    <>
      <div className="flex-grow flex flex-col p-4 overflow-y-auto">
        <SearchCard />
        <div className="flex">
          <AddChapters />
          <AddNotes />
        </div>
      </div>
    </>
  );
};

export default AddSkillsPage;
