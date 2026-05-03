import { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <h1>Namaste, {name}</h1>
    </div>
  );
}
export default Input;
