import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Forum from "./pages/forum/Forum";
import TrainingHome from "./pages/Training/TrainingHome";
import About from "./pages/About";
import GymWorkouts from "./pages/Training/GymWorkouts";
import SkillWorkouts from "./pages/Training/SkillWorkouts";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/traininghome" element={<TrainingHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
