import "bootstrap/dist/css/bootstrap.min.css";

const Section = (props) => {
  return (
    <section className={"py-4 " + props.className} style={props.style}>
      {props.children}
    </section>
  );
};

export default Section;
