import "bootstrap/dist/css/bootstrap.min.css";

const SectionHeader = (props) => {
  return (
    <div className={"text-center " + props.className} style={props.style}>
      <h1 className="display-6">{props.title}</h1>
      <h2 className="lead">{props.subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
