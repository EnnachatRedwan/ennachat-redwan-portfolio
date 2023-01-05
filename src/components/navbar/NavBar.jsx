import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./navbar.module.css";

const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const check = () => {
    setIsChecked(false);
  };

  const toggleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    // <nav
    //   className="navbar navbar-expand-lg navbar-light bg-white py-3"
    //   style={{
    //     // borderBottom: "2px solid #d4d4f9",
    //     boxShadow: "0 0 30px #d4d4f9",
    //     position: "sticky",
    //     left: "0",
    //     top: "0",
    //     zIndex:"100000"
    //   }}
    // >
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       EN <span className="text-secondary">PORTFOLIO</span>
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse justify-content-end"
    //       id="navbarNav"
    //     >
    //       <ul className="navbar-nav">
    //         <li className="nav-item text-center">
    //           <a className="nav-link" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item text-center">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item text-center">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    // <nav className={classes["contain"]}>
    //   <div className={classes["navbar"] + " container"}>
    //     <h1>
    //       EN <span>PORTFOLIO</span>
    //     </h1>
    //     <input type="checkbox" id="nav" />
    //     <label htmlFor="nav">
    //       <i className="fa-solid fa-bars"></i>
    //     </label>

    //     <ul>
    //       <label htmlFor="nav">
    //         <i className="fa-solid fa-xmark"></i>
    //       </label>
    //       <li>
    //         <label htmlFor="nav">Home</label>
    //       </li>
    //       <li>
    //         <label htmlFor="nav">Home</label>
    //       </li>
    //       <li>
    //         <label htmlFor="nav">Home</label>
    //       </li>
    //       <li>
    //         <label htmlFor="nav">Home</label>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <label className={classes["lab"]}>
      <input type="checkbox" checked={isChecked} onChange={() => {}}></input>
      <span className={classes["menu"]} onClick={toggleCheck}>
        <span className={classes["hamburger"]}></span>
      </span>
      <ul>
        <li>
          <a href="#header" onClick={check}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={check}>
            About Me
          </a>
        </li>
        <li>
          <a href="#education" onClick={check}>
            Education
          </a>
        </li>
        <li>
          <a href="#experience" onClick={check}>
            Experience
          </a>
        </li>
      </ul>
    </label>
  );
};

export default NavBar;
