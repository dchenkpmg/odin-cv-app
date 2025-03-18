import { useState } from "react";
import "../styles/Form.css";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";

export default function Education({ education, setEducation }) {
  const [tempData, setTempData] = useState([...education]);
  const [isEdit, setIsEdit] = useState(null);

  const handleEdit = (index) => {
    setTempData([...education]);
    setIsEdit(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation([...tempData]);
    setIsEdit(false);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...tempData];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setTempData(updatedEducation);
  };

  return (
    <>
      {education.map((edu, index) => (
        <form onSubmit={handleSubmit} key={index} className="form-wrapper">
          <div className="input-container">
            <label htmlFor={`school-${index}`}>School: </label>
            <input
              type="text"
              id={`school-${index}`}
              name="school"
              value={isEdit === index ? tempData[index].school : edu.school}
              onChange={(e) => handleChange(e, index)}
              disabled={isEdit !== index}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`degree-${index}`}>Degree: </label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={isEdit === index ? tempData[index].degree : edu.degree}
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
                isEdit === index
                  ? new Date(tempData[index].startDate)
                      .toISOString()
                      .split("T")[0]
                  : edu.startDate
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
              value={isEdit === index ? tempData[index].endDate : edu.endDate}
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
              state={education}
              setState={setEducation}
              setTempData={setTempData}
            ></DeleteButton>
          </div>
          <hr></hr>
        </form>
      ))}
      <AddButton
        state={education}
        setState={setEducation}
        setTempData={setTempData}
        setIsEdit={setIsEdit}
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
