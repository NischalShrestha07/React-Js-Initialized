function HelloArray() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <>
      <h1>Inside the Hello Array Jsx</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li>
            {index} - {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}
export default HelloArray;
