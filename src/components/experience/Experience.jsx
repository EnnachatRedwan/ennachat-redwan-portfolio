import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import ExperienceCard from "../../ui/ExperienceCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Experience = (props) => {
  const _experience = [
    {
      title: "Ministry of Justice and Liberties",
      subtitle: "DotNet Full-Stack Developer",
      text: "Completed tasks: creating website template using HTML,CSS and JavaScript. Creating a web application from archiving documents using asp.net, RDLC and SQLServer",
      footer: "From 17/03/2021 to 13/04/2021 at Rabat city",
    },
    {
      title:
        "Directorate of Studies, Cooperation and Modernization - Ministry of Justice",
      subtitle: "Mobile Full-Stack Developer",
      text: "Completed tasks: creating a Cross Platform projects tracking application that can runs on IOS, Android and Windows using the following technologies. Front-end Mobile: Flutter/Dart Back-end: Node.js Express.js JWT Database: MySQL",
      footer: "From 04/07/2022 to 02/09/2022 at Rabat",
    },
  ];

  return (
    <Section>
      <div className="container">
        <SectionHeader title="Experience" subtitle="My experience" />
        <div className="row justify-content-around my-4">
          {_experience.map((e) => (
            <div className="col-md-4">
              <ExperienceCard
                title={e.title}
                subtitle={e.subtitle}
                text={e.text}
                footer={e.footer}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
