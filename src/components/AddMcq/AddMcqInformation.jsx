import React from "react";
import { classes } from "../../data/Data";
import { subjects } from "../../data/Data";
import { useState } from "react";
import { useEffect } from "react";
import { getAllSkills } from "../../api/SkillApi";
import { toast } from "react-hot-toast";
import { useSharedData } from "../../functions/SharedDataContext";

const AddMcqInformation = () => {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [wholeData, setWholeData] = useState([]);
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
  console.log(wholeData);
  console.log(chapter);

  useEffect(() => {
    const filteredChapters = wholeData.filter((value, index) => {
      return value.class === className && value.subject === subject;
    });
    setFilteredChapters(filteredChapters);
    if (filteredChapters.length > 0) {
      setChapter(filteredChapters[0].chapter);
    }
  }, [className, subject]);
  return (
    <div className="bg-main rounded-lg px-6 py-4 max-w-full mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold text-center">
          Add Information of Chapter
        </h1>
        <br />
        <select
          name="classes-dropdown"
          className="border-ternary_light border-solid border-2 rounded-full lg:text-xl px-8 py-1 mb-4 focus:outline-none focus:border-primary"
          onChange={(e) => setClassName(e.target.value)}
        >
          {classes.map((value, index) => {
            return <option value={value.class}>{value.class}</option>;
          })}
        </select>
        <select
          name="subjects-dropdown"
          className="border-ternary_light border-solid border-2 rounded-full lg:text-xl px-8 py-1 mb-2 focus:outline-none focus:border-primary"
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subject, index) => {
            return <option value={subject.subject}>{subject.subject}</option>;
          })}
        </select>
        <label htmlFor="id-mcq" className="text-center lg:text-xl mb-2">
          Select Chapter
        </label>
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
      </div>
    </div>
  );
};

export default AddMcqInformation;
