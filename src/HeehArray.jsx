function HeehArray() {
  const user = { firstName: "Narayan", secondName: "Shrestha", age: "23" };
  const user2 = { firstName: "Nischal", secondName: "Shrestha", age: "20" };
  function fullName(user) {
    return user.firstName + " " + user.secondName;
  }
  return (
    <>
      <h1>User Details</h1>
      <h3>Full Name:{fullName(user)}</h3>
      <h4>Age:{user.age}</h4>
      {/* <ul>
        {user.map((user.firstName,user.secondName,user.age) => (
        <li> { user.firstName } - {user.secondName} - {user.age}</li>
      ))}
      </ul> */}
    </>
  );
}
export default HeehArray;
