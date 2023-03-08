import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import './App.css';
import TasksBroad from "./components/Content/TasksBroad";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Content/Contact"


function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
  <Router>
    <div className="Wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen}  />
      <Routes>
            <Route path="/" element={<TasksBroad />} />
            <Route path="/about" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
