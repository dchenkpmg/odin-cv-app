import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Personal from "./components/Personal.jsx";
import Preview from "./components/Preview.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

import { useState } from "react";
import "./styles/App.css";

function App() {
  const initialPersonal = {
    name: "Dylan Chen",
    email: "clown.world.forever@gmail.com",
    phone: "0800888999",
    address: "Fake St, Clown City",
    bio: "Talented clown, court jester and fan of circuses",
  };
  const initialEducation = [
    {
      school: "Clown Academy for Gifted Jesters",
      degree: "MSc Circus Science",
      startDate: new Date("1999-12-20").toISOString().split("T")[0],
      endDate: new Date("2006-11-30").toISOString().split("T")[0],
    },
    {
      school: "Circus Act Polytechnic",
      degree: "BSc Circus Act Engineering",
      startDate: new Date("1997-12-31").toISOString().split("T")[0],
      endDate: new Date("1999-10-30").toISOString().split("T")[0],
    },
  ];

  const initialExperience = [
    {
      job: "Clown Scientist",
      employer: "GMPK",
      startDate: new Date("2006-12-20").toISOString().split("T")[0],
      endDate: new Date("2099-11-30").toISOString().split("T")[0],
      description:
        "Researching methods into optimising laugh/cry ratio for terrible jokes. Also malicious ways to guarantee job security.",
    },
  ];

  const [personal, setPersonal] = useState(initialPersonal);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);
  return (
    <>
      <title>CV App</title>
      <Header></Header>
      <div className="main-section">
        <div className="form-section">
          <Card title="Personal Info">
            <Personal personal={personal} setPersonal={setPersonal}></Personal>
          </Card>
          <Card title="Education">
            <Education
              education={education}
              setEducation={setEducation}
            ></Education>
          </Card>
          <Card title="Work Experience">
            <Experience
              experience={experience}
              setExperience={setExperience}
            ></Experience>
          </Card>
        </div>
        <div className="preview-section">
          <Preview
            personal={personal}
            education={education}
            experience={experience}
          ></Preview>
        </div>
      </div>
    </>
  );
}

export default App;
