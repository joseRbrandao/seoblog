import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ReactHelmet from "./Pages/ReactHelmet";

const App = () => (
  <HashRouter>
    <div className="App">
      <h1>Hello Romary</h1>

      <Link to="/#/"> Home</Link>
      <br />
      <Link to="/#/about"> About</Link>
      <br />
      <Link to="/#/reacthelmet"> React Helmet</Link>
      <Routes>
        <Route path="/#/" element={Home} />
        <Route path="/#/about" element={About} />
        <Route path="/#/reacthelmet" element={ReactHelmet} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
