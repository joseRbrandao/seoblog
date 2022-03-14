import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dogs from "./Pages/Dogs";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <h1>Hello Romary</h1>
      <Link to="/"> Home</Link>
      <br />
      <Link to="/about"> About</Link>
      <br />
      <Link to="/dogs"> Dogs</Link>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/dogs" element={Dogs} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
