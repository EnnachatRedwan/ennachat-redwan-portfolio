import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className="row">
          <div className={classes["content"] + " col-md-4"}>
            <h1>Personal accounts:</h1>
            <div>
              {/* <a href="mailto: ennachat.redwan.pro@gmail.com" target="_blank">Send Email</a> */}
              <a href="https://github.com/EnnachatRedwan" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
