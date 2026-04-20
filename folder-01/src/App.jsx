// import React from "react";

import { useState } from "react";
import Button from "./Button";
import Button2 from "./Button2";

// const App = () => {
//   function clickButton() {
//     return alert("Button clicked");
//   }
//   return (
//     <>
//       <h1>hello</h1>
//       <button onClick={clickButton}>Click Me</button>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import Button from "./Button";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>

//       <Button />
//     </>
//   );
// };

// export default App;

function App() {
  const [count, setCount] = useState(0);

  const [isOn, setIsOn] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState(false);

  const [text, setText] = useState("");

  const [items, setItems] = useState([]);

  return (
    <>
      <h1>Panel</h1>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />

      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br />

      <Button text="Turn On Light" />
      <br />
      <Button text="Turn OFF Light" />
      <br />
      <Button text="Play Music" />
      <br />
      <Button2 text="Called from Btn2" />
      <br />

      <button onClick={() => setCount(0)}>Reset</button>

      <div className="container">
        <h3>{isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>

      <div className="container">
        <h3>{correctAnswer ? "CORRECT" : "INCORRECT"}</h3>
        <button
          onClick={() => {
            setCorrectAnswer(!correctAnswer);
          }}
        >
          Check
        </button>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>YOu typed:{text}</h2>

      <button onClick={() => setItems([...items, "New Item"])}>Add Item</button>

      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}
export default App;
