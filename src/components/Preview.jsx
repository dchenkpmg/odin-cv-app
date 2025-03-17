import "../styles/Preview.css";

export default function Preview({ personal, education, experience }) {
  return (
    <div className="preview">
      <div className="personal-preview">
        <div className="left-preview">
          <h2>{personal.name}</h2>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.address}</p>
        </div>
        <div className="right-preview">
          <p>{personal.bio}</p>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <h3>{experience[index].job}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
