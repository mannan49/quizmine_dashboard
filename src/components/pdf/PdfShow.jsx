import React from "react";
import { useEffect } from "react";
import { getAllNotes } from "../../api/NotesApi";
import { useState } from "react";
import { toast } from "react-hot-toast";

const PdfShow = () => {
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      console.log("Calling Get All Notes");
      try {
        const response = await getAllNotes();
        if (response.ok) {
          const { data } = await response.json();
          setAllNotes(data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchNotes();
  }, []);

  console.log("data", allNotes);

  return (
    <div className="min-h-fit max-w-full space-y-4 flex flex-col items-cente bg-main rounded-xl mt-4 py-4 px-2 lg:p-8">
      <h2 className="border-none rounded-full w-1/2 bg-primary lg:px-4 py-1 text-main text-center text-xl mx-auto">
        Notes List
      </h2>
      <table className="max-w-full">
        <thead>
          <tr className="border-b-2 border-gray-500">
            <th>Class</th>
            <th className="hidden md:block">Subject</th>
            <th>Chapter</th>
            <th>GitHub</th>
            <th className="hidden md:block">PDF</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {allNotes.map((notes) => {
            return (
              <>
                <tr key={notes._id} className="border-b-2 border-gray-500">
                  <td className="text-sm px-0.5 lg:px-4 lg:py-2">
                    {notes.className}
                  </td>
                  <td className="text-sm lg:px-4 lg:py-2 hidden md:block">
                    {notes.subject}
                  </td>
                  <td className="text-sm px-0.5 lg:px-4 lg:py-2">
                    {notes.skill}
                  </td>
                  <td className="text-sm px-1 lg:px-4 lg:py-2">
                    {" "}
                    {notes.githubRepo}
                  </td>
                  <td className="text-sm  lg:px-4 lg:py-2 hidden md:block">
                    {notes.pdfFileName}
                  </td>
                  <td>
                    <button className="bg-primary text-white px-4 lg:px-8 py-0.5 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PdfShow;
