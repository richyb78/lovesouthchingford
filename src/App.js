
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
