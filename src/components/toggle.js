import React from "react";
import LoginForm from "./login";
import Register from "./register";

function Toggle() {
  const [formType, setFormType] = React.useState("login");

  const toggleForm = (newFormType) => {
    setFormType(newFormType);
  };

  return formType === "login" ? (
    <LoginForm onFormSwitch={toggleForm} />
  ) : (
    <Register onFormSwitch={toggleForm} />
  );
}

export default Toggle;
