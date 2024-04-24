import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Quiz from "./quizContainer";
import FlashCards from "./flashCardsContainer";
import Resource from "./resourcesContainer";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/FlashCardsContainer" element={<FlashCards />} />
      <Route path="/quizContainer" element={<Quiz />} />
      <Route path="/resource" element={<Resource />} />
    </Routes>
  );
}

export default MyRoutes;
