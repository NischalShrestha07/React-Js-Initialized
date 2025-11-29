import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Posts";
import Props from "./Props";

import Button from "./Button";
import UseState from "./UseState";
import Test from "./Test";
import FunctionTest from "./Functions/FunctionTest";
import Haha from "./Haha";
function App() {
  const $name = "Narayan";
  return (
    <>
      <h1>haha how are you {$name}</h1>
      <img src={reactLogo} alt="" />

      <Posts />
      <Button />
      <Props name="Narayan Shrestha" />
      <UseState />
      <Test />
      <br />

      <FunctionTest />
      <Haha />
    </>
  );
}

export default App;
