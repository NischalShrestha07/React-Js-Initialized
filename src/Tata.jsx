function Tata() {
  const $name = "Narayan Shrestha";
  function techStackFunction() {
    const $techStack = "React";
    return <h1>Welcome to tech Stack {$techStack}</h1>;
  }
  function count() {
    const $countNo = 0;
    return $countNo + 1;
  }
  return (
    <>
      <h1>Hello {$name}</h1>
      <h1>{count().$countNo}</h1>
      <button onClick={count()}>Click Gar</button>
      <span>{techStackFunction()}</span>
    </>
  );
}
export default Tata;
