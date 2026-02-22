import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Car from "./vehicle/Car";
import Bike from "./vehicle/Bike";
import Truck from "./vehicle/Truck";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Vehicle Gallerys</h1>

        <nav className="navbar">
          <Link to="/car" className="nav-button">Car</Link>
          <Link to="/bike" className="nav-button">Bike</Link>
          <Link to="/truck" className="nav-button">Truck</Link>
        </nav>

        <Routes>
          <Route path="/car" element={<Car />} />
          <Route path="/bike" element={<Bike />} />
          <Route path="/truck" element={<Truck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;