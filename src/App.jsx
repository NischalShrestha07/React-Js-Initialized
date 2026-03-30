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
import Tata from "./Tata";
function App() {
  const $element = <h1>Hhahshasah</h1>;
  const $name = "Narayan";
  return (
    <>
      <h1>haha how are you {$name}</h1>
      <img src={reactLogo} alt="" />
      {/* <h3>{$element}</h3> */}
      {$element}
      <Posts />
      <Button />
      <Props name="Narayan Shrestha" />
      <UseState />
      <Test />
      <br />
      <FunctionTest />
      <Haha />
      <Tata />
    </>
  );
}

export default App;
