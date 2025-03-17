import "../styles/Form.css";

export default function AddButton({ state, setState, setTempData, setIsEdit }) {
  const handleAdd = () => {
    const newState = [
      ...state,
      { school: "", degree: "", startDate: "", endDate: "" },
    ];
    setState(newState);
    setTempData(newState);
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
