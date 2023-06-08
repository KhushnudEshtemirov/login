function Login() {
  const handleGoogle = () => {
    window.open("https://api.vatandoshlarfondi.uz/api/oauth/google", "_self");
  };

  const handleFacebook = () => {
    window.open("https://api.vatandoshlarfondi.uz/api/oauth/facebook", "_self");
  };

  return (
    <>
      <button onClick={handleGoogle}>Login with Google</button>
      <button onClick={handleFacebook}>Login with Facebook</button>
    </>
  );
}
export default Login;
