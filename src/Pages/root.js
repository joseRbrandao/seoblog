import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./PageHome/Home";
import About from "./PageAbout/About";
import ReactHelmet from "./PageReactHelmet/ReactHelmet";

const Rotas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/reacthelmet" element={ReactHelmet} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Rotas;
