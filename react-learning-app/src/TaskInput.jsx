function TaskInput({ input, setInput, addTask }) {
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>
    </>
  );
}

export default TaskInput;
