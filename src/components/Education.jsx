import { useState } from "react";
import "../styles/Form.css";

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
        <div key={index}>
          <form onSubmit={handleSubmit}>
            <div>
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
            <button type="submit" disabled={isEdit !== index}>
              Submit
            </button>
          </form>
          {isEdit !== index && (
            <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button>
          )}
        </div>
      ))}
    </>
  );
}
