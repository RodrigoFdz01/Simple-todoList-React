import { useState } from "react";

function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [tarea, setTarea] = useState([]);

  function handleChange(event) {
    setTextInput(event.target.value);
    //console.log(setTextInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length !== 0) {
      setTarea([...tarea, textInput]);
    }
    setTextInput("");
  };

  /* const deleteTarea = (id) => {
    setTarea(
      tarea.filter((e, index) => {
        return index !== id;
      })
    );
  };*/
  const deleteTarea = (id) => {
    setTarea(tarea.filter((e, index) => index !== id));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="text"
            value={textInput}
            type="text"
            placeholder="todo..."
            onChange={handleChange}
            autoFocus
          />
          <button className="btn btn-dark" type="submit">
            Add
          </button>
        </div>
        <ul>
          {tarea.map((e, index) => (
            <li key={index}>
              <span>{index + 1} : </span>
              {e}
              <button
                className="btn btn-primary"
                onClick={() => deleteTarea(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
