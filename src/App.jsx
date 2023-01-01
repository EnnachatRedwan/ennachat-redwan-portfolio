import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/header";
import Education from "./components/education/Education";
// import Desc from "./components/description";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AboutMe from "./components/about/AboutMe";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        {/* <Desc></Desc> */}
        <AboutMe />
        <Education />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
