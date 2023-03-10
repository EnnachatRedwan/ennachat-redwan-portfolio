import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import ExperienceCard from "../../ui/ExperienceCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Experience = (props) => {
  const _experience = [
    {
      title: "Ministry of Justice and Liberties",
      subtitle: "SOFTWARE DEVELOPER INTERNSHIP",
      text: "Redesigned web templates used inside the ministry and created a web application for archiving documents.",
      footer: "MAR 2021 - APR 2021",
    },
    // {
    //   title:
    //     "LOCAL FREELANCING",
    //   subtitle: "SOFTWARE DEVELOPER",
    //   text: "Created, designed, and hosted websites for restaurants and coffee shops which eliminates the need for paper menus, reduced the cost of purchasing paper menus and increased convenience.",
    //   footer: "JUL 2021 -JAN 2022",
    // },
    {
      title:
        "Directorate of Studies, Cooperation and Modernization - Ministry of Justice",
      subtitle: "SOFTWARE DEVELOPER INTERNSHIP",
      text: "Created a Cross Platform application for tracking projects, the application can runs on IOS, Android and Windows.",
      footer: "JUL 2022 – SEP 2022",
    },
  ];

  return (
    <Section id="experience">
      <div className="container">
        <SectionHeader title="Experience" subtitle="My experience" />
        <div className="row justify-content-around my-4">
          <div className="col col-md-9">
            {_experience.map((e, i) => (
              <ExperienceCard
                key={i}
                title={e.title}
                subtitle={e.subtitle}
                text={e.text}
                footer={e.footer}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
