import './App.css';
// import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ErrorHandle from './components/ErrorHandle';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<ErrorHandle />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
