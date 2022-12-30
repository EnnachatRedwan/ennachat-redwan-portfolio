import NavBar from "./components/NavBar";
import Header from "./components/header";
import Desc from "./components/description";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header></Header>
        {/* <Desc></Desc> */}
        <AboutMe></AboutMe>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
