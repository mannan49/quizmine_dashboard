import React from "react";
import SearchCard from "../components/utils/SearchCard";
import PdfShow from "../components/pdf/PdfShow";

const PdfPage = () => {
  return (
    <div className="flex-grow flex flex-col p-4 overflow-y-auto bg-slate-300">
      <SearchCard />
      <PdfShow className="flex-grow" />
    </div>
  );
};

export default PdfPage;
