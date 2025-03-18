import "../styles/Form.css";

export default function AddButton({
  state,
  setState,
  setIsEdit,
  setFormData,
  newSection,
}) {
  const handleAdd = () => {
    const newState = [...state, newSection];
    setFormData(newSection);
    setState(newState);
    setIsEdit(state.length);
  };
  return (
    <div className="add-btn-container">
      <button onClick={handleAdd} className="add-btn">
        Add New
      </button>
    </div>
  );
}
