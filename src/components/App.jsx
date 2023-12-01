import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [todos, setTodos] = useState([]);

  function addNote(title, content) {
    let note = { title: title, content: content };
    setTodos((prev) => [...prev, note]);
  }

  function deleteNote(id){
    return setTodos( ()=> todos.filter((todo, index)=> index !== id )
  )}

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div>
        {todos.map((todo, index) => (
          <Note
            key={index}
            id={index}
            title={todo.title}
            content={todo.content}
            deleteNote = {deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
