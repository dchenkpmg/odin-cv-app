export default function DeleteButton({
  index,
  education,
  setEducation,
  setTempData,
}) {
  const handleDelete = () => {
    const newState = [...education];
    newState.splice(index, 1);
    setEducation(newState);
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
