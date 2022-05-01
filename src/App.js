import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./components/HomePage";
import Footer from "./layout/Footer";
import CardPage from "./components/CardPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:apiType/:searchInput" element={<CardPage />} />
          <Route path="/:apiType" element={<CardPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
