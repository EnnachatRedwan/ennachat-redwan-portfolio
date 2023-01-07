import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes["content"]}>
              <a href="mailto: ennachat.redwan.pro@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/EnnachatRedwan" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/redwan-ennachat"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          &copy; copyright 2023 <strong style={{color:"#6871d7"}}>Redwan ENNACHAT</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
