import { useState } from "react";
import "../styles/Form.css";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";

export default function Experience({ experience, setExperience }) {
  const [tempData, setTempData] = useState([...experience]);
  const [isEdit, setIsEdit] = useState(null);

  const handleEdit = (index) => {
    setTempData([...experience]);
    setIsEdit(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperience([...tempData]);
    setIsEdit(false);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...tempData];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setTempData(updatedExperience);
  };

  return (
    <>
      {experience.map((work, index) => (
        <form onSubmit={handleSubmit} key={index} className="form-wrapper">
          <div className="input-container">
            <label htmlFor={`job-${index}`}>Job: </label>
            <input
              type="text"
              id={`job-${index}`}
              name="job"
              value={isEdit === index ? tempData[index].job : work.job}
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`employer-${index}`}>Employer: </label>
            <input
              type="text"
              id={`employer-${index}`}
              name="employer"
              value={
                isEdit === index ? tempData[index].employer : work.employer
              }
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`startDate-${index}`}>Start Date: </label>
            <input
              type="date"
              id={`startDate-${index}`}
              name="startDate"
              value={
                isEdit === index ? tempData[index].startDate : work.startDate
              }
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`endDate-${index}`}>End Date: </label>
            <input
              type="date"
              id={`endDate-${index}`}
              name="endDate"
              value={isEdit === index ? tempData[index].endDate : work.endDate}
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`description-${index}`}>Description: </label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={
                isEdit === index
                  ? tempData[index].description
                  : work.description
              }
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="button-area">
            {isEdit !== index && (
              <button
                type="button"
                onClick={() => handleEdit(index)}
                className="edit-btn"
              >
                Edit
              </button>
            )}
            <button
              type="submit"
              disabled={isEdit !== index}
              className="submit-btn"
            >
              Submit
            </button>
            <DeleteButton
              index={index}
              state={experience}
              setState={setExperience}
              setTempData={setTempData}
            ></DeleteButton>
          </div>
          <hr></hr>
        </form>
      ))}
      <AddButton
        state={experience}
        setState={setExperience}
        setTempData={setTempData}
        setIsEdit={setIsEdit}
        newSection={{
          job: "Placeholder",
          employer: "Placeholder",
          startDate: "2000-11-20",
          endDate: "2000-11-30",
          description: "Placeholder",
        }}
      ></AddButton>
    </>
  );
}
