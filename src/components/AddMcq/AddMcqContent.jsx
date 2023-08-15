import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { addMcq } from "../../api/McqApi";
import { useSharedData } from "../../functions/SharedDataContext";

const AddMcqContent = () => {
  const [statement, setStatement] = useState("");
  const [optionAstatement, setOptionAstatement] = useState("");
  const [optionBstatement, setOptionBstatement] = useState("");
  const [optionCstatement, setOptionCstatement] = useState("");
  const [optionDstatement, setOptionDstatement] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const { chapter, setChapter, filteredChapters, setFilteredChapters } =
    useSharedData();

  const handleDone = async (e) => {
    e.preventDefault();
    console.log("ilteredChapters", filteredChapters);
    console.log("chapter", chapter);
    if (!chapter || !filteredChapters) {
      toast.error("Chapter or filteredChapters is not available yet.");
      return;
    }
    const skill_id = filteredChapters.find((value, index) => {
      return value.chapter === chapter;
    });
    const options_data = [
      {
        id: "A",
        value: optionAstatement,
      },
      {
        id: "B",
        value: optionBstatement,
      },
      {
        id: "C",
        value: optionCstatement,
      },
      {
        id: "D",
        value: optionDstatement,
      },
    ];
    const data = {
      statement: statement,
      options: options_data,
      correct_option: correctOption,
      chapter: {
        id: skill_id._id,
        name: chapter,
      },
    };

    try {
      const response = await addMcq(data);
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
    }

    function clearingData() {
      setStatement("");
      setOptionAstatement("");
      setOptionBstatement("");
      setOptionCstatement("");
      setOptionDstatement("");
      setCorrectOption("");
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => {
        radio.checked = false;
      });
    }

    clearingData();
  };

  return (
    <>
      <div className="bg-main rounded-lg px-8 py-4 w-full mx-auto">
        <h1 className="font-bold text-xl text-center">
          Enter the information of MCQ
        </h1>
        <div className="flex flex-col w-fit">
          <label htmlFor="question">Statement</label>
          <textarea
            type="textarea"
            id="question"
            className="border-ternary_light border-solid border-2 resize-none rounded-lg p-2 w-full h-32 focus:outline-none  focus:border-primary mb-2"
            rows="4"
            cols="50"
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
          />
        </div>
        <div className="lg:space-y-2">
          <div className="flex flex-col lg:flex-row items-center lg:gap-2">
            <label htmlFor="optionA">Option A</label>
            <input
              type="text"
              id="optionA"
              value={optionAstatement}
              className="border-ternary_light border-solid border-2 rounded-full w-4/5 py-0.5 px-4 lg:py-1 focus:border-primary focus:outline-none"
              onChange={(e) => setOptionAstatement(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-2">
            <label htmlFor="optionB">Option B</label>
            <input
              type="text"
              id="optionB"
              value={optionBstatement}
              className="border-ternary_light border-solid border-2 rounded-full w-4/5 px-4 py-0.5 lg:py-1 focus:outline-none focus:border-primary"
              onChange={(e) => setOptionBstatement(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-2">
            <label htmlFor="optionC">Option C</label>
            <input
              type="text"
              id="optionC"
              value={optionCstatement}
              className="border-ternary_light border-solid border-2 rounded-full w-4/5 px-4 py-0.5 lg:py-1 focus:outline-none focus:border-primary"
              onChange={(e) => setOptionCstatement(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-2">
            <label htmlFor="optionD">Option D</label>
            <input
              type="text"
              id="optionD"
              value={optionDstatement}
              className="border-ternary_light border-solid border-2 rounded-full w-4/5 px-4  lg:py-1 focus:outline-none focus:border-primary"
              onChange={(e) => setOptionDstatement(e.target.value)}
            />
          </div>
        </div>
        <div className="options-container">
          <h1 className="text-xl text-center">Choose the Correct Option</h1>
          <div className="flex justify-around items-center">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                id="optionA"
                value="A"
                onChange={(e) => setCorrectOption(e.target.value)}
              />
              <label className="mt-1 lg:mt-0" htmlFor="optionA">
                {" "}
                A{" "}
              </label>
            </div>
            <div className=" flex items-center  space-x-2">
              <input
                type="radio"
                name="option"
                id="optionB"
                value="B"
                onChange={(e) => setCorrectOption(e.target.value)}
              />
              <label className="mt-1 lg:mt-0" htmlFor="optionB">
                {" "}
                B{" "}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                id="optionC"
                value="C"
                onChange={(e) => setCorrectOption(e.target.value)}
              />
              <label className="mt-1 lg:mt-0" htmlFor="optionC">
                {" "}
                C{" "}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                id="optionD"
                value="D"
                onChange={(e) => setCorrectOption(e.target.value)}
              />
              <label className="mt-1 lg:mt-0" htmlFor="optionD">
                {" "}
                D{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="mt-2 border-2 border-solid rounded-full bg-primary px-4 py-1 text-main text-xl w-1/2"
            onClick={handleDone}
          >
            Add MCQ
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMcqContent;
