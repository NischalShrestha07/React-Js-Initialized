// import React from "react";

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
  return (
    <>
      <h1>Panel</h1>
      <Button text="Turn On Light" />
      <Button text="Turn OFF Light" />
      <Button text="Play Music" />
      <Button2 text="Called from Btn2" />
    </>
  );
}
export default App;
