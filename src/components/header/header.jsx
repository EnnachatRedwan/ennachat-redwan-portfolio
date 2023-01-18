import { TypeAnimation } from "react-type-animation";
import Resume from "../../resume/EnnachatRedwanCV.pdf";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="container p-3 mt-5" id="header">
      <div className="row align-items-center justify-content-center">
        <div className="col col-md-5 text-center text-md-start py-5 ">
          <h1 className=" display-6" style={{ height: "90px" }}>
            I am{" "}
            <strong style={{ color: "#6871d7" }}>
              <TypeAnimation
                sequence={[
                  "Redwan ENNACHAT", // Types 'One'
                  2000, // Waits 1s
                  "a Software Developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </strong>
          </h1>
          <h2 className="lead">Download my resume</h2>
          <a
            href={Resume}
            download="resume"
            className="btn btn-lg my-3 text-white"
            style={{ background: "#6871d7" }}
          >
            Download
          </a>
        </div>
        <div
          className={
            "col-md-6  d-md-block text-center "
            // +classes["numer-holder"]
          }
        >
          {/* <div id="numer" className={classes["numer"]}></div> */}
          <img
            src="Dev.png"
            className="img-fluid p-xl-5"
            alt="ennachat redwan image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
