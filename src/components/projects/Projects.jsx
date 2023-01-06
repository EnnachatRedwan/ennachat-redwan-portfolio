import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import ProjectCard from "../../ui/ProjectCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Projects = (props) => {
  const _projects = [
    { title: "Full projects manager", img: "/prj1.jpg", code: "https://github.com/EnnachatRedwan/pfe_project_tracking_ennachat_redwan_flutter", demo: "" },
    { title: "EN-Shop website", img: "/prj2.jpg", code: "https://github.com/EnnachatRedwan/EN-SHOP", demo: "https://ennachat-shop.netlify.app/" },
    
  ];

  return (
    <Section id="projects">
      <div className="container">
        <SectionHeader title="Projects" subtitle="My Projects" />
        <div className="row py-5">
          {_projects.map((prj, i) => (
            <div className="col-md-4">
              <ProjectCard
                key={i}
                title={prj.title}
                img={prj.img}
                code={prj.code}
                demo={prj.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
