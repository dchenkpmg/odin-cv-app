import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Personal from "./components/Personal.jsx";
import Preview from "./components/Preview.jsx";
import Education from "./components/Education.jsx";

import { useState } from "react";
import "./styles/App.css";

function App() {
  const initialPersonal = {
    name: "Dylan Chen",
    email: "fakeemail@gmail.com",
    phone: "64256463",
    address: "fake st, 24 imaginary place",
    bio: "talented clown",
  };
  const initialEducation = [
    {
      school: "Clown Academy for Gifted Jesters",
      degree: "BSc Circus Science",
      startDate: "20/12/1999",
      endDate: "31/11/2006",
    },
    {
      school: "Clown Academy for Gifted Jesters",
      degree: "BSc Circus Science",
      startDate: "20/12/1999",
      endDate: "31/11/2006",
    },
  ];
  const [personal, setPersonal] = useState(initialPersonal);
  const [education, setEducation] = useState(initialEducation);
  return (
    <>
      <Header></Header>
      <div className="main-section">
        <div className="sub-section form-section">
          <Card title="Personal Info">
            <Personal personal={personal} setPersonal={setPersonal}></Personal>
          </Card>
          <Card title="Education">
            <Education
              education={education}
              setEducation={setEducation}
            ></Education>
          </Card>
          <Card title="Work Experience"></Card>
        </div>
        <div className="sub-section">
          <Preview personal={personal}></Preview>
        </div>
      </div>
    </>
  );
}

export default App;
