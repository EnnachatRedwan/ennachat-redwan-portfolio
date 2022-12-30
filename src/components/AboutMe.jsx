import Card from "../helpers/Card";
import Section from "../helpers/section";
import SectionHeader from "../helpers/SectionHeader";

import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = (props) => {
  return (
    <Section style={{ background: "#f7f7ff" }}>
      <div className="container">
        <SectionHeader title="About Me" style={{color:'#6871d7'}} subtitle="Learn more about me" />
      </div>
    </Section>
  );
};

export default AboutMe;
