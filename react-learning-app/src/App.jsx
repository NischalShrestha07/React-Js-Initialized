import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };
  return (
    <div>
      <h1>Task Manager</h1>

      <TaskInput input={input} setInput={setInput} addTask={addTask} />

      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
