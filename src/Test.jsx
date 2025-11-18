import Posts from "./Posts";

function Test() {
  function getName(myname) {
    return myname;
  }
  const name = "k xa bro";

  function handleClick() {
    alert("Button was clicked");
  }
  const handleInput = (event) => {
    console.log("value: ", event.target.value);
  };
  return (
    <>
      <h1>Hello {getName(name)}</h1>
      <Posts />
      <button onClick={handleClick}>Click Me</button>

      {/* below is how we do inline function */}
      <button onClick={() => alert("Jelllo")}>Say Hello!</button>

      <br />
      <input type="text" onChange={handleInput} placeholder="Type something" />
    </>
  );
}
export default Test;
