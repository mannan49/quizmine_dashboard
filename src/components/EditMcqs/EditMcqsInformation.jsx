import React from "react";
import AddMcqInformation from "../AddMcq/AddMcqInformation";
import { useNavigate } from "react-router-dom";

const EditMcqsInformation = () => {
  const navigate = useNavigate();
  const handleDone = () => {
    navigate("/edit-mcqs");
  };
  return (
    <div className="bg-main rounded-lg lg:px-8 py-4 w-fit mx-auto">
      <AddMcqInformation />
      <div className="w-full flex justify-center">
        <button
          className="border-2 border-solid rounded-full bg-primary px-4 py-1 text-main text-xl w-4/5"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditMcqsInformation;
