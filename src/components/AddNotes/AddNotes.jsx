import { classes } from "../../data/Data";
import { subjects } from "../../data/Data";
import { useState } from "react";
import { getAllSkills } from "../../api/SkillApi";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";
import { useSharedData } from "../../functions/SharedDataContext";
import { useEffect } from "react";
import { addNotes } from "../../api/NotesApi";

function AddNotes() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wholeData, setWholeData] = useState([]);
  const [pdfFileName, setPdfFileName] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const { chapter, setChapter, filteredChapters, setFilteredChapters } =
    useSharedData();

  useEffect(() => {
    const fetchSkills = async () => {
      console.log("Calling Get All Skills");
      try {
        const response = await getAllSkills();
        if (response.ok) {
          const data = await response.json();
          setWholeData(data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchSkills();
  }, []);
  useEffect(() => {
    const filteredChapters = wholeData.filter((value, index) => {
      return value.class === className && value.subject === subject;
    });
    setFilteredChapters(filteredChapters);
    if (filteredChapters.length > 0) {
      setChapter(filteredChapters[0].chapter);
    }
  }, [className, subject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      className: className,
      subject: subject,
      skill: chapter,
      githubRepo: githubRepo,
      pdfFileName: pdfFileName,
    };
    try {
      const response = await addNotes(data);
      setIsLoading(true); // Start loading
      if (response.ok) {
        const { message, error_code } = await response.json();
        if (error_code === 0) {
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false); // End loading
    }
    setPdfFileName("");
  };
  return (
    <div className="bg-main rounded-2xl w-full mt-4 lg:mt-20 px-4 lg:px-8 py-4 m-auto">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-primary font-bold text-center text-2xl">
          Add Notes in Database
        </h1>
        <select
          name="classes-dropdown"
          className="border-ternary_light border-solid border-2 rounded-full text-xl px-8 py-1 focus:outline-none focus:border-primary"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          {classes.map((value, index) => {
            return <option value={value.class}>{value.class}</option>;
          })}
        </select>
        <select
          name="subjects-dropdown"
          className="border-ternary_light border-solid border-2 rounded-full text-xl px-8 py-1 focus:outline-none focus:border-gray-300"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subject, index) => {
            return <option value={subject.subject}>{subject.subject}</option>;
          })}
        </select>
        <select
          name="chapters-dropdown"
          className="border-ternary_light border-solid border-2 rounded-full text-sm lg:text-lg px-8 py-1 focus:outline-none focus:border-primary"
          onChange={(e) => setChapter(e.target.value)}
        >
          {filteredChapters.map((singleObject, index) => {
            return (
              <option value={singleObject.chapter}>
                {singleObject.chapter}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Enter GitHub Repo's Name"
          className="border-ternary_light border-solid border-2 rounded-full px-8 py-1 focus:outline-none focus:border-gray-300"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter PDF File's Name"
          className="border-ternary_light border-solid border-2 rounded-full px-8 py-1 focus:outline-none focus:border-gray-300"
          value={pdfFileName}
          onChange={(e) => setPdfFileName(e.target.value)}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="border-2 border-solid rounded-full bg-primary px-4 py-1 text-main text-xl">
            <input
              className="w-full text-center text-main text-xl"
              type="submit"
              value="Submit"
              disabled={isLoading}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default AddNotes;
