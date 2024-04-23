import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://660d9f406ddfa2943b34dd38.mockapi.io/User",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ UserName, password, email }),
        }
      );
      const data = await response.json();
      console.log("Registration successful", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="auth-form-container">
        <div className="header">
          <div className="smile">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/c5/c6/6cc5c650-a335-27f9-d064-882786a31329/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg"
              style={{ width: "60px", height: "60px" }}
              alt="smiley red dot"
            ></img>
          </div>
          <div className="right-logo">
            <h1>Learn Japanese</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3> Sign Up</h3>
          <label htmlFor="Username"> User Name </label>
          <input
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="User Name"
            id="Username"
            name="Username"
          ></input>
          <br></br>
          <label htmlFor="email"> Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
          ></input>
          <br></br>
          <label htmlFor="password"> Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          ></input>
          <br></br>
          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already Have an Account? Log In Here
        </button>
      </div>
    </>
  );
};

export default Register;
