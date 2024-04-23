import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MyRoutes from "./components/routes";
import NavBar from "./components/navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavBar loggedInUser={loggedInUser} />
        <MyRoutes
          isLoggedIn={isLoggedIn}
          onLogin={() => setIsLoggedIn(true)}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      </div>
    </Router>
  );
}

export default App;
