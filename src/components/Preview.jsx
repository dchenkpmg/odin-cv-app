import "../styles/Preview.css";

export default function Preview({ personal, education, experience }) {
  return (
    <div className="preview">
      <div className="personal-preview">
        <div className="left-preview">
          <h2>{personal.name}</h2>
        </div>
      </div>
    </div>
  );
}
