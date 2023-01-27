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
            I am an ambitious and driven software engineer with a strong
            foundation in computer science and a passion for creating innovative
            solutions. As a recent graduate with a degree in Computer Science, I
            have gained hands-on experience in various programming languages
            such as C++, Java, Python, and JavaScript. I have a strong
            understanding of software development methodologies and have
            experience working on diverse projects such as web development,
            mobile development, and software testing. I am a quick learner, a
            team player, and have the ability to work under pressure to meet
            deadlines. I am excited to bring my skills and enthusiasm to a
            dynamic and forward-thinking company where I can continue to grow as
            an engineer and make a meaningful impact.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
