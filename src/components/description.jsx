import Alert from "../helpers/alert";
import Card from "../helpers/Card";

const Desc = () => {
  return (
    <section className="container my-3">
      <Card>
        <Alert
          className="p-3"
          style={{
            color: "#6871d7",
            background: "#ebe9ff",
          }}
        >
          As a recent graduate with a degree in [related field], I am excited to
          begin my career as a developer. Throughout my studies, I gained a
          strong foundation in [technical skills], and completed several
          hands-on projects that allowed me to apply my skills in a practical
          setting. I am passionate about using technology to solve problems and
          create innovative solutions, and I am eager to continue learning and
          growing as a developer. In my spare time, I enjoy [hobbies or
          interests related to development], and am always seeking new
          opportunities to learn and expand my skillset. I am confident that my
          dedication and enthusiasm, combined with my technical abilities, make
          me a valuable asset to any team.
        </Alert>
      </Card>
    </section>
  );
};

export default Desc;
