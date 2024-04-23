import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const DeleteUserButton = ({ userId, onDelete }) => {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://660d9f406ddfa2943b34dd38.mockapi.io/User/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        onDelete();
        navigate("/login");
      } else {
        const errorMessage = `Failed to delete user: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
      setError("Failed to delete user. Please try again later.");
    }
  };

  const handleUpdateUsername = async () => {
    try {
      const response = await fetch(
        `https://660d9f406ddfa2943b34dd38.mockapi.io/User/${userId[0]}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, username: newUsername }),
        }
      );
      if (response.ok) {
        setNewUsername("");
        setError(null);
      } else {
        const errorMessage = `Failed to update username: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError("Failed to update username. Please try again later.");
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch(
        `https://660d9f406ddfa2943b34dd38.mockapi.io/User/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, password: newPassword }),
        }
      );
      if (response.ok) {
        setNewPassword("");
        setError(null);
      } else {
        const errorMessage = `Failed to update password: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError("Failed to update password. Please try again later.");
    }
  };
  return (
    <Container>
      <br />
      <label>
        New Username:
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </label>
      <button onClick={handleUpdateUsername}>Update Username</button>
      <br />
      <label>
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <button onClick={handleUpdatePassword}>Update Password</button>
      <br></br>
      <button onClick={handleDelete}>Delete User</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Container>
  );
};

export default DeleteUserButton;
