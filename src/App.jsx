import NavBar from "./components/NavBar";
import Header from "./components/header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header></Header>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
