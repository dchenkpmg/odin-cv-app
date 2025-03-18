import { useState } from "react";
import "../styles/Form.css";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";

export default function Experience({ experience, setExperience }) {
  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState(null);

  const handleEdit = (index) => {
    setFormData(experience[index]);
    setIsEdit(index);
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const updatedExperience = [...experience];
    updatedExperience[index] = formData;
    setExperience(updatedExperience);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {experience.map((work, index) => (
        <form
          onSubmit={(e) => handleSubmit(e, index)}
          key={index}
          className="form-wrapper"
        >
          <div className="input-container">
            <label htmlFor={`job-${index}`}>Job: </label>
            <input
              type="text"
              id={`job-${index}`}
              name="job"
              value={isEdit === index ? formData.job : work.job}
              onChange={(e) => handleChange(e)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`employer-${index}`}>Employer: </label>
            <input
              type="text"
              id={`employer-${index}`}
              name="employer"
              value={isEdit === index ? formData.employer : work.employer}
              onChange={(e) => handleChange(e)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`startDate-${index}`}>Start Date: </label>
            <input
              type="date"
              id={`startDate-${index}`}
              name="startDate"
              value={isEdit === index ? formData.startDate : work.startDate}
              onChange={(e) => handleChange(e)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`endDate-${index}`}>End Date: </label>
            <input
              type="date"
              id={`endDate-${index}`}
              name="endDate"
              value={isEdit === index ? formData.endDate : work.endDate}
              onChange={(e) => handleChange(e)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`description-${index}`}>Description: </label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={isEdit === index ? formData.description : work.description}
              onChange={(e) => handleChange(e)}
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
            ></DeleteButton>
          </div>
          <hr></hr>
        </form>
      ))}
      <AddButton
        state={experience}
        setState={setExperience}
        setIsEdit={setIsEdit}
        setFormData={setFormData}
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
