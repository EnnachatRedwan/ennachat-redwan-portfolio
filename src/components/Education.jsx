import Section from "../helpers/section";
import SectionHeader from "../helpers/SectionHeader";

import "bootstrap/dist/css/bootstrap.min.css";

const Education = (props) => {
  return (
    <Section>
      <div className="container">
        <SectionHeader
          title={
            <h1 className="display-4">
              <i
                className="fa-solid fa-graduation-cap"
                style={{ color: "#6871d7" }}
              ></i>
            </h1>
          }
          style={{ color: "#6871d7" }}
          subtitle="My Education"
        />
        <div className="row py-5 justify-content-around g-4">
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                color: "#6871d7",
                boxShadow: "0 0 15px #6871d733",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-5">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">High School Diploma</h1>
                <p className="card-text text-secondary h6">
                  "Baccalauréat" in Morocco
                </p>
                <p className="text-secondary">Physics and chemistry option</p>
                <h3 className="h5 text-secondary">Obtained in 2019</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                color: "#6871d7",
                boxShadow: "0 0 15px #6871d733",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-5">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">Associate's Degree</h1>
                <p className="card-text text-secondary h6">
                  "Diplôme de technicien spécialisé" in Morocco
                </p>
                <p className="text-secondary">software development option</p>
                <h3 className="h5 text-secondary">Obtained in 2021</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                color: "#6871d7",
                boxShadow: "0 0 15px #6871d733",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-5">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">Bachelor's Degree</h1>
                <p className="card-text text-secondary h6">
                  "Licence professionnelle" in Morocco
                </p>
                <p className="text-secondary">Database Administrator option</p>
                <h3 className="h5 text-secondary">Obtained in 2022</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
