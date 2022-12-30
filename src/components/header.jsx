import classes from "./header.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="container p-3">
      <div className="row align-items-center justify-content-center">
        <div className="col col-md-5 text-center text-md-start py-5 ">
          <h1 className=" display-6">
            I am <strong id="myName" style={{ color: "#6871d7" }}></strong>
          </h1>
          <h2 className="lead">I am a Software Engineer</h2>
          <a
            className="btn btn-lg my-3 text-white"
            style={{ background: "#6871d7" }}
          >
            About Me
          </a>
        </div>
        <div
          className={
            "col col-md-6 d-none d-md-block text-center "
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
