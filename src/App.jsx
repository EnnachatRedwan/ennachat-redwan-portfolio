import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/header";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AboutMe from "./components/about/AboutMe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
