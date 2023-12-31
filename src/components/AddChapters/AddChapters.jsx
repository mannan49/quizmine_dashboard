import { classes } from "../../data/Data";
import { subjects } from "../../data/Data";
import { useState } from "react";
import { addSkill } from "../../api/SkillApi";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";

function AddChapters() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      class: className,
      subject: subject,
      chapter: chapter,
    };
    try {
      const response = await addSkill(data);
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
    setChapter("");
  };
  return (
    <div className="bg-main rounded-2xl w-full mt-5 lg:mt-20 px-4 lg:px-8 py-4 m-auto">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-primary font-bold text-center text-2xl">
          Add Chapter in Database
        </h1>
        <select
          name="classes-dropdown"
          className="app-select"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          {classes.map((value, index) => {
            return <option value={value.class}>{value.class}</option>;
          })}
        </select>
        <select
          name="subjects-dropdown"
          className="app-select"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subject, index) => {
            return <option value={subject.subject}>{subject.subject}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Enter Chapter's Name"
          className="app-select"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full border-2 border-solid rounded-full bg-primary px-4 py-1">
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

export default AddChapters;
