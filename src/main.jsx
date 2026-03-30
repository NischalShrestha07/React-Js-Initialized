import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Tata from "./Tata.jsx";
import HamroApp from "./HamroApp.jsx";
import Haha from "./Haha.jsx";
import Hello from "./Hello.jsx";
import HelloTest from "./HelloTest.jsx";
import HelloArray from "./HelloArray.jsx";
import ArrayApp from "./ArrayApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Haha /> */}
    {/* <HamroApp /> */}
    {/* <Hello /> */}
    {/* <HelloTest /> */}
    <ArrayApp />
  </StrictMode>,
);
