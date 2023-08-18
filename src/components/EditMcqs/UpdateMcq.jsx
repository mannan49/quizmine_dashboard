import React, { useEffect, useState } from "react";
import { getSingleMcq, updateMcq } from "../../api/McqApi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../utils/Loader";

const UpdateMcq = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleMcq, setSingleMcq] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOptionValue, setCorrectOptionValue] = useState(null);
  const [parsedOptions, setParsedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeStatement = (e) => {
    setSingleMcq((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (index, e) => {
    const updatedOptions = [...parsedOptions];
    updatedOptions[index].value = e.target.value;
    setParsedOptions(updatedOptions);
  };

  useEffect(() => {
    const fetchMcqs = async () => {
      console.log("Calling Single Mcqs");
      try {
        setIsLoading(true); // Start loading
        const response = await getSingleMcq(id);
        if (response.ok) {
          const data = await response.json();
          setSingleMcq(data);
          setCorrectOptionValue(data.correct_option);
          setParsedOptions(JSON.parse(data.options));
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false); // End loading
      }
    };
    fetchMcqs();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: id,
      statement: singleMcq.statement,
      options: parsedOptions,
      correct_option: correctOptionValue,
      chapter: {
        id: singleMcq.chapter.id,
        name: singleMcq.chapter.name,
      },
    };
    try {
      setIsLoading(true); // Start loading
      const response = await updateMcq(data);
      if (response.ok) {
        const { message, error_code } = await response.json();
        navigate("/edit-mcqs");
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
  };

  return (
    <form
      action=""
      className="bg-headline block border-2 border-primary rounded-lg px-2 lg:px-8 py-4 lg:w-2/3"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-center mb-2">Question#2</h3>
      <textarea
        className="border-ternary_light border-solid border-2 resize-none rounded p-2 w-full focus:outline-none  focus:border-primary mb-2"
        id="statement"
        rows="4"
        name="statement"
        placeholder="Enter the description"
        value={singleMcq.statement}
        onChange={handleChangeStatement}
        required
      ></textarea>
      <div className="flex-col justify-center space-y-2">
        {parsedOptions.map((option, index) => (
          <div className="flex" key={index}>
            <label
              htmlFor={`option${option.id}`}
              className="bg-tertiary text-xl h-fit rounded-full px-3 py-1 my-auto mr-2"
            >
              {option.id}
            </label>
            <input
              type="text"
              name={`option${option.id}`}
              id={`option${option.id}`}
              value={parsedOptions.find((opt) => opt.id === option.id)?.value}
              className="text-xl w-full bg-headline-color rounded-lg text-primary-color border border-headline-color shadow-md py-4 px-8 block"
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
        <div className="flex justify-center space-x-3">
          <div>
            <p>Correct Option:</p>
          </div>
          <div className="flex justify-around space-x-5">
            {parsedOptions.map((option, index) => {
              return (
                <div className="flex space-x-2 items-center">
                  <input
                    type="radio"
                    name={`option${option.id}`}
                    id={`option${option.id}`}
                    value={option.id}
                    checked={correctOptionValue === option.id}
                    onChange={(e) => setCorrectOptionValue(e.target.value)}
                  />
                  <label className="label-option" htmlFor="optionA">
                    {option.id}{" "}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="mt-2 border-2 border-solid rounded-full bg-primary px-4 py-1 w-full lg:w-1/2">
          <button
            type="submit"
            className="w-full text-main text-xl"
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? <Loader /> : "Update MCQ"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateMcq;
