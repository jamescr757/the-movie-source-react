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
          <Route path="/:apiType" element={<MovieGrid />} />
          {/* <Route path="/in-theaters" element={<MovieGrid api="In Theaters" />} />
          <Route path="/upcoming" element={<MovieGrid api="Upcoming" />} />
          <Route path="/popular" element={<MovieGrid api="Popular" />} />
          <Route path="/search/:searchText" element={<MovieGrid api="Search" />} /> */}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
