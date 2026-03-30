function IfTest() {
  const isLoggedIn = true;
  // if (isLoggedIn)

  const age = 12;
  let message;
  if (age > 18) {
    message = <h1>You can vote</h1>;
  } else {
    message = <h1>You cannot vote</h1>;
  }
  return <div>{message}</div>;
}
export default IfTest;
