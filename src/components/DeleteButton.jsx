export default function DeleteButton({ index, state, setState, setTempData }) {
  const handleDelete = () => {
    const newState = [...state];
    newState.splice(index, 1);
    setState(newState);
    setTempData(newState);
  };

  return (
    <>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </>
  );
}
