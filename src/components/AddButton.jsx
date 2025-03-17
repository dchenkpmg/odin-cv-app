import "../styles/Form.css";

export default function AddButton({
  education,
  setEducation,
  setTempData,
  setIsEdit,
}) {
  const handleAdd = () => {
    const newState = [
      ...education,
      { school: "", degree: "", startDate: "", endDate: "" },
    ];
    setEducation(newState);
    setTempData(newState);
    setIsEdit(education.length);
  };
  return (
    <div className="add-btn-container">
      <button onClick={handleAdd} className="add-btn">
        Add New
      </button>
    </div>
  );
}
