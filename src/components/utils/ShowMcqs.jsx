import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MCQs } from "../../data/Data";
import toast from "react-hot-toast";
import CustomLabel from "./CustomLabel";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { deleteMcq, getAllMcqs } from "../../api/McqApi";
import { useSharedData } from "../../functions/SharedDataContext";
import Loader from "./Loader";

const ShowMcqs = () => {
  const navigate = useNavigate();
  const { chapter, filteredChapters } = useSharedData();
  const [filteredMcqs, setFilteredMcqs] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [chapterNumber, setChapterNumber] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedMcqs, setHasFetchedMcqs] = useState(false);

  const handleEdit = (mcqId) => {
    navigate(`/update-mcq/${mcqId}`);
  };
  const handleDelete = async (mcqId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to DELETE this mcq?"
    );
    if (!confirmDelete) {
      return; // User canceled, do nothing
    }
    try {
      setIsLoading(true);
      const response = await deleteMcq(mcqId);
      if (response.ok) {
        const { message, error_code } = await response.json();
        navigate("/edit-mcqs");
        if (error_code === 0) {
          setHasFetchedMcqs(hasFetchedMcqs ? false : true);
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the MCQs from the API
    const fetchMcqs = async () => {
      console.log("Calling Get All Mcqs");
      setIsLoading(true);
      try {
        const response = await getAllMcqs();
        if (response.ok) {
          const data = await response.json();
          setMcqs(data);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMcqs();
  }, [hasFetchedMcqs]);
  useEffect(() => {
    // Save the state to local storage whenever chapterNumber changes
    window.localStorage.setItem("filteredMcqs", JSON.stringify(filteredMcqs));
    window.localStorage.setItem("chapterNumber", chapterNumber.toString());
  }, [filteredMcqs, chapterNumber]);
  useEffect(() => {
    const skill_id = filteredChapters.find((value, index) => {
      return value.chapter === chapter;
    });
    const chapter_number = filteredChapters.findIndex(
      (obj) => obj.chapter === skill_id.chapter
    );
    const filteredMcqs = mcqs.filter((mcq, index) => {
      return mcq.chapter.name === chapter && mcq.chapter.id === skill_id._id;
    });
    setChapterNumber(chapter_number);
    setFilteredMcqs(filteredMcqs);
  }, [filteredChapters, mcqs, chapter]);

  useEffect(() => {
    setIsLoading(true);
    const storedFilteredMcqs = window.localStorage.getItem("filteredMcqs");
    const storedChapterNumber = window.localStorage.getItem("chapterNumber");

    if (storedFilteredMcqs) {
      setFilteredMcqs(JSON.parse(storedFilteredMcqs));
    }

    if (storedChapterNumber) {
      setChapterNumber(parseInt(storedChapterNumber));
    }
  }, []);
  useEffect(() => {
    // Save the state to local storage whenever filteredMcqs changes
    window.localStorage.setItem("filteredMcqs", JSON.stringify(filteredMcqs));
    const storedFilteredMcqs = window.localStorage.getItem("filteredMcqs");
    setCurrentIndex(storedFilteredMcqs);
  }, [filteredMcqs]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto lg:w-2/3">
          <div>
            <h1 className="text-xl text-center lg:text-2xl mb-1 text-primary">
              Chapter#{chapterNumber + 1} MCQs: {chapter}
            </h1>
            <div className="flex flex-col space-y-2 justify-center items-center">
              {filteredMcqs.map((mcq, index) => {
                const options = JSON.parse(mcq.options);
                return (
                  <>
                    <div
                      key={index}
                      className="bg-headline block border-2 b border-primary rounded-lg px-2 lg:px-8 py-4 w-full"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl lg:text-2xl font-bold">
                          Question#{index + 1} of {filteredMcqs.length}
                        </h3>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="text-2xl text-tertiary mr-3"
                            onClick={() => {
                              handleEdit(mcq._id);
                            }}
                          >
                            <MdModeEdit />
                          </button>
                          <div className="flex items-center">
                            {isLoading ? (
                              <Loader />
                            ) : (
                              <button
                                type="button"
                                className="text-2xl text-red-600"
                                onClick={() => {
                                  handleDelete(mcq._id);
                                }}
                              >
                                <MdDelete />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="lg:text-2xl mb-2">{mcq.statement}</p>
                      <div className="flex-col justify-center space-y-2">
                        {options.map((option, index) => {
                          return (
                            <div className="flex">
                              <input
                                type="radio"
                                name={`option${option.id}`}
                                id={`option${option.id}`}
                                value="A"
                                disabled
                                className=" bg-transparent border-none appearance-none"
                              />
                              <CustomLabel htmlFor={`option${option.id}`}>
                                {option.id}.{" "}
                                {
                                  options.find((opt) => opt.id === option.id)
                                    ?.value
                                }
                              </CustomLabel>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex justify-center mt-4">
                        <button className="border-2 border-solid rounded-full bg-tertiary px-4 py-1 text-main lg:text-xl w-full lg:w-1/2">
                          Correct Option : {mcq.correct_option}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowMcqs;
