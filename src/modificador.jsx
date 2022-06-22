import { useState, useRef } from "react";

const Modificador = () => {
  const [Value, setvalue] = useState("");
  const inputRef = useRef(null);

  const Click = (event) => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  const onChange = (event) => {
    setvalue(event.target.value);
  };
  return (
    <div>
      <input placeholder="modif..." onChange={onChange} ref={inputRef} />
      <button onClick={Click}>Send</button>
      {Value}
    </div>
  );
};

export default Modificador;
