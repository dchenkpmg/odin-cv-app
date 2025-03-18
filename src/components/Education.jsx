import { useState } from "react";
import "../styles/Form.css";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";

export default function Education({ education, setEducation }) {
  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState(null);

  const handleEdit = (index) => {
    setFormData(education[index]);
    setIsEdit(index);
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const updatedEducation = [...education];
    updatedEducation[index] = formData;
    setEducation(updatedEducation);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {education.map((edu, index) => (
        <form
          onSubmit={(e) => handleSubmit(e, index)}
          key={index}
          className="form-wrapper"
        >
          <div className="input-container">
            <label htmlFor={`school-${index}`}>School: </label>
            <input
              type="text"
              id={`school-${index}`}
              name="school"
              value={isEdit === index ? formData.school : edu.school}
              onChange={(e) => handleChange(e)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`degree-${index}`}>Degree: </label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={isEdit === index ? formData.degree : edu.degree}
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
              value={isEdit === index ? formData.startDate : edu.startDate}
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
              value={isEdit === index ? formData.endDate : edu.endDate}
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
              state={education}
              setState={setEducation}
            ></DeleteButton>
          </div>
          <hr></hr>
        </form>
      ))}
      <AddButton
        state={education}
        setState={setEducation}
        setIsEdit={setIsEdit}
        setFormData={setFormData}
        newSection={{
          school: "Placeholder",
          degree: "Placeholder",
          startDate: "2000-11-20",
          endDate: "2000-11-30",
        }}
      ></AddButton>
    </>
  );
}
