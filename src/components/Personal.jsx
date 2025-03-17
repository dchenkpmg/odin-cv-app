import { useState } from "react";
import "../styles/Form.css";

export default function Personal({ personal, setPersonal }) {
  const [tempData, setTempData] = useState({ ...personal });
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setTempData({ ...personal });
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonal(tempData);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={tempData.name}
            onChange={handleChange}
            disabled={!isEdit}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={tempData.email}
            onChange={handleChange}
            disabled={!isEdit}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={tempData.phone}
            onChange={handleChange}
            disabled={!isEdit}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            value={tempData.address}
            onChange={handleChange}
            disabled={!isEdit}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="bio">Bio: </label>
          <textarea
            type="text"
            name="bio"
            id="bio"
            value={tempData.bio}
            onChange={handleChange}
            disabled={!isEdit}
          ></textarea>
        </div>
        <div className="button-area">
          <button type="submit" disabled={!isEdit} className="submit-btn">
            Submit
          </button>
          {!isEdit && (
            <button onClick={handleEdit} className="edit-btn">
              Edit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
