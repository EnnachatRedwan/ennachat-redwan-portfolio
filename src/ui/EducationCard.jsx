import "bootstrap/dist/css/bootstrap.min.css";

const EducationCard = (props) => {
  return (
    <div className="col-lg-3">
      <div
        className="card"
        style={{
          backgroundImage: " linear-gradient(150deg,#e9e9ff,#e9e9ff33)",
          color: "#6871d7",
          boxShadow: "0 0 15px #6871d733",
          border: "2px #6871d733 solid",
          borderRadius: "20px",
        }}
      >
        <div className="card-body text-center d-grid gap-3">
          <div className="display-5">
            <i className="fa-sharp fa-solid fa-certificate"></i>
          </div>
          <h1 className="card-title h3">{props.title}</h1>
          <p className="card-text  h6">{props.subtitle}</p>
          <p>{props.text}</p>
          <h3 className="h5 ">{props.footer}</h3>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
