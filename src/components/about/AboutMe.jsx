import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = (props) => {
  return (
    <Section style={{ background: "#f7f7ff" }} id="about">
      <div className="container">
        <SectionHeader title="About Me" subtitle="Learn more about me" />
        <div className="d-flex justify-content-center text-center">
          <div className="p-4" style={{ color: "#6871d7", width: "900px" }}>
            I am a Software developer who is Detail-oriented and passionate about continuous learning and growth
            in software development. Seeking new opportunities to apply and
            expand my skills.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
