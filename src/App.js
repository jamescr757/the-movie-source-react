import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from "./layout/BaseLayout";
import HomePage from "./components/HomePage";
import MovieGrid from "./components/MovieGrid";
import Footer from "./layout/Footer";
import CardPage from "./components/CardPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:apiType" element={<CardPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
