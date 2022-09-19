import { useState } from "react";

function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [check, setCheck] = useState(false);
  const [tarea, setTarea] = useState([]);

  function handleChange(event) {
    setTextInput(event.target.value);
    //console.log(setTextInput);
  }

  function handleCheck(id) {
    setCheck(!check);
    // tarea.filter((e, index) => (index === id ? !check : e));
    // setCheck(tarea.map((item, index) => (index === id ? check : " ")));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length !== 0) {
      setTarea([...tarea, textInput]);
    }
    setTextInput("");
  };

  const deleteTarea = (id) => {
    setTarea(tarea.filter((e, index) => index !== id));
  };
  //if (!tarea.length) return " loading...";
  return (
    <div className="container">
      <h2 className="text-center mt-3">Todo List</h2>
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
        <ul className="">
          {tarea.map((e, index) => (
            <li key={index} className="m-3">
              <span>{index + 1} : </span>
              {e}
              <button
                className="btn btn-primary p-2 m-2"
                onClick={() => deleteTarea(index)}
              >
                Delete
              </button>
              <h4>Status: {check ? "Completed" : "Uncompleted"} </h4>
              <input
                className="p-3 m-1"
                type="checkbox"
                onClick={() => handleCheck(index)}
              />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
