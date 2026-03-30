function HelloTest() {
  // function getName(yourname) {
  //   // return "Narayan Shrestha";
  //   return yourname;
  // }
  const getName = (yourname) => {
    // return "Narayan Shrestha";
    return yourname;
  };
  const name = "Kuina Zoro";
  const name1 = "Nami Sanji";

  function handleClick() {
    alert("Button was clicked");
  }

  const handleInput = (event) => {
    console.clear();

    console.log("Value:", event.target.value);
  };
  return (
    <>
      <h1>hello whats up brother {getName(name)}</h1>
      <h1>Great yo see you {getName(name1)}</h1>
      <button onClick={handleClick}>Click Me Yo</button>{" "}
      <button
        onClick={() => {
          alert("Hello whatss up btn clicked");
        }}
      >
        Say Hello
      </button>
      <br />
      <input
        type="text"
        onClick={handleInput}
        placeholder="Type Something"
        width={100}
        style={{ padding: 20 }}
      />
    </>
  );
}
export default HelloTest;
