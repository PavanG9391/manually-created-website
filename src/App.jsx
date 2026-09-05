import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import StudentServices from "./pages/StudentServices";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      {/* The shared navbar is staying above all page routes. */}
      <Navbar />

      <main>
        {/* The routed pages are switching in without a full page reload. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<Navigate to="/course-details/ai" replace />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
