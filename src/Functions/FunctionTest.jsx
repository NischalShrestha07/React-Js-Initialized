import styles from "./FunctionTest.module.css";
function FunctionTest() {
  function handleClick() {
    alert("I am clicked");
  }
  return (
    <>
      <button className={styles.functionStyle} onClick={handleClick}>
        Click me{" "}
      </button>
    </>
  );
}

export default FunctionTest;
