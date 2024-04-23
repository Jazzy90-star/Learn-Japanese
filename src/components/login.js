import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({
  onLogin,
  onFormSwitch,
  loggedInUser,
  setLoggedInUser,
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const URL_ENDPOINT = "https://660d9f406ddfa2943b34dd38.mockapi.io/User";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL_ENDPOINT);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${userName}, ${password}`);
    const thisUser = users.filter((user) => {
      return user.UserName === userName;
    });
    if (thisUser[0].password === password) {
      setIsLoggedIn(true);
      setLoggedInUser(thisUser[0].UserName);
      console.log("Login Successful: ", thisUser[0].UserName);
    } else {
      console.error("Password or Username did not match");

      console.log(
        "Login Credentials: ",
        thisUser[0].UserName,
        thisUser[0].password === users[0].password
      );
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>You are logged in!</div>
      ) : (
        <div id="auth-form-container" className="auth-form-container">
          <div className="header">
            <div className="smile"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label htmlFor="userName">User Name</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter User Name"
              id="userName"
              name="userName"
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <br />
            <button>Log In</button>
          </form>
          {error && <div className="error">{error}</div>}
          <button className="link-btn" onClick={() => onFormSwitch("register")}>
            Don't have an account? Register Here
          </button>
        </div>
      )}
    </>
  );
};
export default LoginForm;
