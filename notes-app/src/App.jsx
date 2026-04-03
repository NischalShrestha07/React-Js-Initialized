import React from "react";

const App = () => {
  return (
    <div>
      <form className="flex item-center">
        <input type="text" placeholder="Enter notes heading" name="" id="" />
        <br />
        <input
          style={{ marginTop: 10 }}
          type="text"
          placeholder="Enter Details"
        />
        <br />
        <button style={{ padding: 12, marginTop: 12 }}>Add Note</button>
      </form>
    </div>
  );
};

export default App;
