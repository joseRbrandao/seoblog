import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./PageHome/Home";
import About from "./PageAbout/About";
import SearchConsole from "./PageSeacrConsole/SearchConsole";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/searchconsole" element={SearchConsole} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
