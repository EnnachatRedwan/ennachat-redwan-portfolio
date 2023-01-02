import classes from "./experienceCard.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const ExperienceCard = (props) => {
  return (
    <div className={classes["experience-card"]}>
      <div>
        <span className={classes["square"]} />
      </div>

      <div>
        <h1 className="fw-bold">{props.title}</h1>
        <h2 className="lead">{props.subtitle}</h2>
        <p>{props.text}</p>
        <h3>{props.footer}</h3>
      </div>
    </div>
  );
};
export default ExperienceCard;
