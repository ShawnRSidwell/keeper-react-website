import React, { useState } from "react";

function CreateArea({addNote}) {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit= (e) => {
    e.preventDefault();
    // Check if title or content is empty
    if (!titleText.trim() || !contentText.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }
    // Clear error state
    setError("");

    //add note and clear input fields
    props.addNote(titleText, contentText);
    setTitleText("");
    setContentText("");
  };

  //alternatively could create not object here. 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target: { value } }) => setTitleText(value)}
          name="title"
          placeholder="Title"
          value={titleText}
        />
        <textarea
          onChange={({ target: { value } }) => setContentText(value)}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={contentText}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;


/* 

Alternative solution
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
} */