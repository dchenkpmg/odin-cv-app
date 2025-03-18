import "../styles/Preview.css";

export default function Preview({ personal, education, experience }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-UK", {
      year: "numeric",
      month: "long",
    });
  };
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
      <hr></hr>
      <div className="experience">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="job">
            <h3>{item.job}</h3>
            <p>{item.employer}</p>
            <div className="date-section">
              <p>{formatDate(item.startDate)} -</p>
              <p>{formatDate(item.endDate)}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="education">
        <h2>Education</h2>
        {education.map((item, index) => (
          <div key={index} className="job">
            <h3>{item.school}</h3>
            <p>{item.degree}</p>
            <div className="date-section">
              <p>{formatDate(item.startDate)} -</p>
              <p>{formatDate(item.endDate)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
