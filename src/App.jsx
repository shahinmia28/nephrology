import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Help from "./components/help/Help";
import Appointment from "./components/appointment/Appointment";
import Services from "./components/services/Services";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
