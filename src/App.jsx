import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/header";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AboutMe from "./components/about/AboutMe";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <AboutMe />
        <Education />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
