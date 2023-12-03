import "./input.css";

import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Departments from "./components/Department/Departments";
import Admissions from "./components/Admissions/Admissions";
import Super from "./components/Supervisors/Super";
import { Publications } from "./components/PubAwards/Publications";
import Circulars from "./components/Circulars/Circulars";
import Gallery from "./components/Gallery/Slider";
import Contact from "./components/Contact/Contact";
import Downloads from "./components/Downloads/Downloads";
import Research from "./components/Research/Research";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phd" element={<Departments />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/supervisors" element={<Super />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/circulars" element={<Circulars />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/research" element={<Research />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
