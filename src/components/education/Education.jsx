import Section from "../../helpers/section";
import SectionHeader from "../../helpers/SectionHeader";
import EducationCard from "../../ui/EducationCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Education = (props) => {
  const educationCards = [
    {
      title: "High School Diploma",
      subtitle: '"Baccalauréat" in Morocco',
      text: "Physics and chemistry option",
      footer: "Obtained in 2019",
    },
    {
      title: "Associate's Degree",
      subtitle: '"Diplôme de technicien spécialisé" in Morocco',
      text: "software development option",
      footer: "Obtained in 2021",
    },
    {
      title: "Bachelor's Degree",
      subtitle: ' "Licence professionnelle" in Morocco',
      text: "Database Administrator option",
      footer: "Obtained in 2022",
    },
  ];
  return (
    <Section>
      <div className="container">
        <SectionHeader
          title={
            <div className="display-4">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
          }
          style={{ color: "#6871d7" }}
          subtitle="My Education"
        />
        <div className="row py-5 justify-content-around g-4">
          {educationCards.map((diploma, i) => (
            <EducationCard
              key={i}
              title={diploma.title}
              subtitle={diploma.subtitle}
              text={diploma.text}
              footer={diploma.footer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
