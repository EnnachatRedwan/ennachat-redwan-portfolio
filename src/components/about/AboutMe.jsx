import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = (props) => {
  return (
    <Section style={{ background: "#f7f7ff" }}>
      <div className="container">
        <SectionHeader title="About Me" subtitle="Learn more about me" />
        <div className="d-flex justify-content-center text-center">
          <div className="p-4" style={{ color: "#6871d7", width: "900px" }}>
            As a junior software engineer, I am passionate about using
            technology to solve real-world problems and create innovative
            solutions. I have a strong foundation in computer science concepts
            and experience with a range of programming languages and Frameworks.
            I have completed a range of academic degrees, diplomas and
            certificates, and have worked on several projects and internships
            during my studies. In my current role as a junior software engineer.
            In my career, I hope to continue learning and growing as a software
            engineer, and to work on projects that have a positive impact on
            people's lives.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
