import classes from "./projectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes["card-container"]}>
      <img src={props.img} alt="project picture" />
      <div className={classes["filter"]} />
      <h1>{props.title}</h1>
      <div className={classes["controls"]}>
        {props.code && (
          <a href={props.code} target="_blank" className={classes["card-btn"]}>
            <i className="fa-solid fa-code"></i>
          </a>
        )}
        {props.demo && (
          <a href={props.demo} target="_blank" className={classes["card-btn"]}>
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
