import "./App.css";
function Hii() {
  const internalStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "red",
  };
  const nav = {
    display: "flex",
    gap: "10",
  };
  return (
    <>
      {/* <h1 className="changeColor">Hii Component is being called!</h1> */}

      <div style={internalStyles} className="container">
        <div className="">
          <a style={{ fontSize: 100 }} href="">
            DevDoko
          </a>
        </div>
        <div className="nav">
          <div className="">
            <ul>
              <li>Details</li>
              <li>About</li>
              <li>Contact</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="colorHO">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores facere
        molestias magni placeat tempora quasi ab cupiditate quam aliquam!
        Perferendis ipsa aperiam tenetur alias? Nisi inventore soluta voluptatum
        quis repellendus.
      </h3>
    </>
  );
}

export default Hii;
