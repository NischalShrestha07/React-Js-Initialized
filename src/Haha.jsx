function Haha() {
  const name = "narayan";
  const headingStyle = {
    color: "white",
    fontSize: "30px",
    backgroundColor: "red",
    textAlign: "center",
  };

  //   return <h1 style={headingStyle}>K xa bro {name}</h1>;
  return (
    <h2
      style={{
        textAlign: "center",
        fontSize: "50px",
        background: "greenyellow",
      }}
    >
      k xa sanxai xa{" "}
      <span style={{ background: "red", fontSize: "100px", color: "white" }}>
        {name}
      </span>
    </h2>
  );
}

export default Haha;
