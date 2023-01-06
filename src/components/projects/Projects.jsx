import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import ProjectCard from "../../ui/ProjectCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Projects = (props) => {
  const _projects = [
    {
      title: "Full projects manager",
      img: "/prj1.jpg",
      code: "https://github.com/EnnachatRedwan/pfe_project_tracking_ennachat_redwan_flutter",
      demo: "",
    },
    {
      title: "EN-Shop website",
      img: "/prj2.jpg",
      code: "https://github.com/EnnachatRedwan/EN-SHOP",
      demo: "https://ennachat-shop.netlify.app",
    },
    {
      title: "Ennachat Restaurent ",
      img: "/prj3.jpg",
      code: "https://github.com/EnnachatRedwan/ennachat-restaurent",
      demo: "https://redwan-restaurant.ml",
    },
    {
      title: "LocatorIP",
      img: "/prj4.jpg",
      code: "https://github.com/EnnachatRedwan/ipLocatorApp",
      demo: "https://www.locatorip.ml",
    },
    {
      title: "EN-Shop ecom",
      img: "/prj5.jpg",
      code: "https://github.com/EnnachatRedwan/ennachat-ecommerce-website-php",
      demo: "http://www.ennachat-shop.ml",
    },
  ];

  return (
    <Section id="projects">
      <div className="container">
        <SectionHeader title="Projects" subtitle="My Projects" />
        <div className="row py-5">
          {_projects.map((prj, i) => (
            <div className="col-md-6 col-lg-4">
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
        <h2 className="text-center lead">
          <strong style={{color:"#6871d7"}}>Note:</strong> you find the rest of my
          projects in{" "}
          <a href="https://github.com/EnnachatRedwan?tab=repositories" style={{textDecoration:"none"}}>
            my github
          </a>
        </h2>
      </div>
    </Section>
  );
};

export default Projects;
