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
          I’m a software engineer with a passion for system design and a holistic approach to development. My focus is on creating scalable, efficient systems that align with business objectives and ensure clean, maintainable code. I excel in bridging the gap between technical execution and strategic vision, always aiming to enhance the overall architecture and performance of the systems I work on.

With a strong foundation in full-stack development and a commitment to engineering excellence, I am dedicated to continuous learning and growth.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
