import { useState } from "react";

export default function Personal({ state, setState }) {
  const [tempData, setTempData] = useState({ ...state });
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setTempData({ ...state });
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(tempData);
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
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={tempData.name}
            onChange={handleChange}
            disabled={!isEdit}
          ></input>
          <button type="submit" disabled={!isEdit}>
            Submit
          </button>
        </div>
        {!isEdit && <button onClick={handleEdit}>Edit</button>}
      </form>
    </>
  );
}
