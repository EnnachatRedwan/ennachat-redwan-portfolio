import "bootstrap/dist/css/bootstrap.min.css";

const Alert = (props) => {
  return (
    <div
      className={"alert " + props.className}
      role="alert"
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Alert;
