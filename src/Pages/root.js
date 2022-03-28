import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./PageHome/Home";
import About from "./PageAbout/About";
import SearchConsole from "./PageSeacrConsole/SearchConsole";

const Rotas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/searchconsole" element={SearchConsole} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Rotas;
