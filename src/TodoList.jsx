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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={textInput}
          type="text"
          placeholder="todo..."
          onChange={handleChange}
        />
        <button>Add</button>

        <ul>
          {tarea.map((e, index) => (
            <li key={index}>
              {e}
              <button onClick={() => deleteTarea(index)}>[ X]</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
