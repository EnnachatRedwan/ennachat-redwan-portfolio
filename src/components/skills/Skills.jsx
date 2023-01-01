import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import EducationCard from "../../ui/EducationCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Skills = (props) => {
  return (
    <Section style={{ background: "#f7f7ff" }}>
      <div className="container">
        <SectionHeader
          title="Skills"
          subtitle="My skills"
          style={{ color: "#6871d7" }}
        ></SectionHeader>
      </div>
    </Section>
  );
};

export default Skills;
