import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from "./layout/BaseLayout";
import HomePage from "./components/HomePage";
import MovieGrid from "./components/MovieGrid";


function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<MovieGrid api="top-rated" />} />
          <Route path="/in-theaters" element={<MovieGrid api="in-theaters" />} />
          <Route path="/upcoming" element={<MovieGrid api="upcoming" />} />
          <Route path="/popular" element={<MovieGrid api="popular" />} />
          <Route path="/search/:searchText" element={<MovieGrid api="search" />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
