import classes from "./projectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes["card-container"]}>
      <img src="/prj1.jpg" alt="project picture" />
      <div className={classes["filter"]} />
      <h1>{props.title}</h1>
      <div className={classes["controls"]}>
        <a href={props.code} className={classes["card-btn"]}>
          <i class="fa-solid fa-code"></i>
        </a>
        <a href={props.demo} className={classes["card-btn"]}>
          Demo
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
