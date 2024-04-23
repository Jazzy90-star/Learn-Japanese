import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Quiz from "./quizContainer";
import FlashCards from "./flashCardsContainer";
import Resource from "./resourcesContainer";
import Toggle from "./toggle";
import Login from "./login";
import Register from "./register";
import DeleteUserButton from "./profile";

function MyRoutes({ isLoggedIn, onLogin, loggedInUser, setLoggedInUser }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [form, setForm] = useState("login");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const handleFormSwitch = (formType) => {
    setForm(formType);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <>
              <Toggle />
              <Home />
            </>
          ) : form === "login" ? (
            <Login
              onLogin={handleLogin}
              onFormSwitch={handleFormSwitch}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          ) : (
            <Register
              onRegister={handleRegister}
              onFormSwitch={handleFormSwitch}
            />
          )
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/FlashCardsContainer" element={<FlashCards />} />
      <Route path="/quizContainer" element={<Quiz />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/profile" element={<DeleteUserButton />} />

      <Route
        path="/login"
        element={
          <Login onLogin={handleLogin} onFormSwitch={handleFormSwitch} />
        }
      />
      <Route
        path="/register"
        element={
          <Register
            onRegister={handleRegister}
            onFormSwitch={handleFormSwitch}
          />
        }
      />
    </Routes>
  );
}

export default MyRoutes;
