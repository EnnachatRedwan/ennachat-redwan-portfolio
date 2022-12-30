import Section from "../helpers/section";
import SectionHeader from "../helpers/SectionHeader";

import "bootstrap/dist/css/bootstrap.min.css";

const Education = (props) => {
  return (
    <Section>
      <div className="container">
        <SectionHeader
          title={
            <i
              className="fa-solid fa-graduation-cap"
              style={{ color: "#6871d7" }}
            ></i>
          }
          style={{ color: "#6871d7" }}
          subtitle="My Education"
        />
        <div className="row">
          <div className="col col-md-3">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">
                  <i class="fa-solid fa-file-certificate"></i>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
