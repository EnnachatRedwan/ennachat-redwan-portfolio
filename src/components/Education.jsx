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
                background: "#f7f7ff",
                color: "#6871d7",
                boxShadow: "0 0 15px #4441",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-6">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">High School Degree</h1>
                <p className="card-text h6">
                  "Baccalauréat" equivalent to high school degree in the USA
                </p>
                <p>Physics and chemistry option</p>
                <h3 className="h5">Obtained in 2019</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                background: "#f7f7ff",
                color: "#6871d7",
                boxShadow: "0 0 15px #4441",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-6">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">High School Degree</h1>
                <p className="card-text h6">
                  "Baccalauréat" equivalent to high school degree in the USA
                </p>
                <p>Physics and chemistry option</p>
                <h3 className="h5">Obtained in 2019</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                background: "#f7f7ff",
                color: "#6871d7",
                boxShadow: "0 0 15px #4441",
                border: "2px #6871d733 solid",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center d-grid gap-3">
                <div className="display-6">
                  <i class="fa-sharp fa-solid fa-certificate"></i>
                </div>
                <h1 className="card-title h3">High School Degree</h1>
                <p className="card-text h6">
                  "Baccalauréat" equivalent to high school degree in the USA
                </p>
                <p>Physics and chemistry option</p>
                <h3 className="h5">Obtained in 2019</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
