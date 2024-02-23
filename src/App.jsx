import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./pages/HomePage/components/Footer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/username" element={<Dashboard/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
