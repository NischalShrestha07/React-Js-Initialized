import styles from "./Button.module.css";
function Button() {
  return (
    <>
      <button>ClickMe</button>;
      <h5 className={styles.bgGreen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        atque.
      </h5>
    </>
  );
}
export default Button;
