import "./App.css";
import React from "react";

import Result from "./components/Result";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ImageGen from "./Components/ImageGen";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Result" element={<Result />}/>
        <Route path="/ImageGen" element={<ImageGen />}/>
      </Routes>
    </div>
  );
}

export default App;
