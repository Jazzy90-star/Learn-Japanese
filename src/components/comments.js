import React, { useState, useEffect } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editing, setEditing] = useState(null);
  const [updatedCommentText, setUpdatedCommentText] = useState("");

  useEffect(() => {
    fetch(`https://66287a7254afcabd0735e1d9.mockapi.io/Comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  //   This section adds the comments to each of the extra resources
  const handleAddComment = () => {
    fetch(`https://66287a7254afcabd0735e1d9.mockapi.io/Comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newComment, author: "You" }),
    })
      .then((response) => response.json())
      .then((data) => setComments([...comments, data]))
      .catch((error) => console.error("Error adding comment:", error));
    setNewComment("");
    //   This section deletes the added comments that the user added before
  };
  const handleDeleteComment = (commentId) => {
    fetch(`https://66287a7254afcabd0735e1d9.mockapi.io/Comments/${commentId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setComments(comments.filter((comment) => comment.id !== commentId))
      )
      .catch((error) => console.error("Error deleting comment:", error));
  };
  // This section updates the comments and pushes them back into the comments section
  const handleUpdateComment = (commentId) => {
    if (editing === null) {
      setEditing(commentId);
    } else {
      fetch(
        `https://66287a7254afcabd0735e1d9.mockapi.io/Comments/${commentId} `,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: updatedCommentText }),
        }
      )
        .then((response) => response.json())
        .then((data) =>
          setComments(
            comments.map((comment) =>
              comment.id === commentId
                ? { ...comment, text: updatedCommentText }
                : comment
            )
          )
        )
        .catch((error) => console.error("Error updating comment:", error));
      setEditing(null);
    }
  };

  //   These are the buttons for the edit, delete, add comment and save
  return (
    <div>
      <h5>Comments</h5>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>

      {comments.map((comment, index) => (
        <div key={index}>
          {editing === comment.id ? (
            <input
              type="text"
              value={updatedCommentText}
              onChange={(e) => setUpdatedCommentText(e.target.value)}
              placeholder="Edit comment"
            />
          ) : (
            <p>{comment.text}</p>
          )}
          <p>— {comment.author}</p>
          <button onClick={() => handleDeleteComment(comment.id)}>
            Delete
          </button>
          <button
            onClick={() => handleUpdateComment(comment.id, updatedCommentText)}
          >
            {editing === comment.id ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Comments;
