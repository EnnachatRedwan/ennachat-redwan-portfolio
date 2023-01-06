import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import ProjectCard from "../../ui/ProjectCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Projects = (props) => {
  return (
    <Section id="projects">
      <div className="container">
        <SectionHeader title="Projects" subtitle="My Projects" />
        <div className="row py-5">
          <div className="col-md-4">
            <ProjectCard title="Full projects manager" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
