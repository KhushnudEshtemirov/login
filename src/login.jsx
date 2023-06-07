import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {
  const [userData, setUserData] = useState(null);

  const handleClick = () => {
    window.open(
      "https://vatandoshlar.napaautomotive.uz/api/oauth/google",
      "_self"
    );
  };

  useEffect(() => {
    const getUser = axios
      .get("https://api.vatandoshlarfondi.uz/api/oauth/call-back/google")
      .then((res) => res.data);

    console.log(getUser);
  }, []);

  return (
    <button onClick={handleClick}>Login</button>
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     console.log(credentialResponse);
    //   }}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    //   sandbox="allow-scripts allow-same-origin"
    //   // Cross-Origin-Opener-Policy="unsafe-none"
    // />
  );
}
export default Login;
