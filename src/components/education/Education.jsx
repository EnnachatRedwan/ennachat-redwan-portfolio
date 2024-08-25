import Section from "../../helpers/Section";
import SectionHeader from "../../helpers/SectionHeader";
import EducationCard from "../../ui/EducationCard";

import "bootstrap/dist/css/bootstrap.min.css";

const Education = (props) => {
  const educationCards = [
    {
      id:1,
      title: "High School Diploma",
      subtitle: 'El Mehdi El Mandjra',
      text: "Physics and chemistry option",
      footer: "Obtained in 2019",
    },
    {
      id:2,
      title: "Associate's Degree",
      subtitle: '',
      text: "software development option",
      footer: "Obtained in 2021",
    },
    {
      id:3,
      title: "Bachelor's Degree",
      subtitle: 'Chouaib Doukkali University',
      text: "Database Administrator option",
      footer: "Obtained in 2022",
    },
    {
      id:4,
      title: "Bootcamp",
      subtitle: 'Université Internationale de Rabat',
      text: "Full-stack Java Spring/Angular",
      footer: "Obtained in 2024",
    },
    {
      id:5,
      title: "Engineer's Degree",
      subtitle: "Diplome d'Ingénieur d'État",
      text: "Software Systems Engineerin",
      footer: "Obtained in 2026",
    },
  ];
  return (
    <Section id="education">
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
          {educationCards.map((diploma) => (
            <EducationCard
              key={diploma.id}
              title={diploma.title}
              subtitle={diploma.subtitle}
              text={diploma.text}
              footer={diploma.footer}
            />
          ))}
        </div>
        <h1 className="text-center pb-4 display-6">Certifications</h1>
        <div className="row justify-content-center">
        <div className="col-md-5">
            <a
              href="https://coursera.org/share/1a83737b3ffe0e9bba79abb6e52f5c78"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~M5XB97T7MN38/CERTIFICATE_LANDING_PAGE~M5XB97T7MN38.jpeg"
                alt="Building Scalable Java Microservices with Spring Boot and Spring Cloud certificate"
              />
            </a>
          </div>
        <div className="col-md-5">
            <a
              href="https://www.cloudskillsboost.google/public_profiles/c39e1a80-a3c6-405d-9918-3ea222a7faa9/badges/6719686?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://cdn.qwiklabs.com/XANPV5tcjEcvtWb28xYf8Jp4KxYUa4Zkok2iLBVo6rQ%3D"
                alt="Building Scalable Java Microservices with Spring Boot and Spring Cloud badge"
              />
            </a>
          </div>
          <div className="col-md-5">
            <a
              href="https://www.udemy.com/certificate/UC-6442de7a-32c5-417e-bcbf-541b490ca1b0/"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-6442de7a-32c5-417e-bcbf-541b490ca1b0.jpg?v=1702032910000"
                alt="SpringBoot Udemy Certification"
              />
            </a>
          </div>
          <div className="col-md-5">
            <a
              href="https://www.udemy.com/certificate/UC-e75388b1-2d1b-43a0-aae2-9f0fdb2af59a/"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-e75388b1-2d1b-43a0-aae2-9f0fdb2af59a.jpg?v=1644060662000"
                alt="Flutter Udemy Certification"
              />
            </a>
          </div>
          <div className="col-md-5">
            <a
              href="https://www.udemy.com/certificate/UC-9ab3b12d-f180-4720-822e-b3187cdfbdf5/"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-9ab3b12d-f180-4720-822e-b3187cdfbdf5.jpg?v=1679423553000"
                alt="React Js Udemy Certification"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
