import NavBar from "./components/NavBar";
import Header from "./components/header";
import Education from "./components/Education";
// import Desc from "./components/description";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AboutMe from "./components/AboutMe";

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
