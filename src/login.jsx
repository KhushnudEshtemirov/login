// import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {
  const [userData, setUserData] = useState(null);

  // const handleClick = () => {
  //   window.open("https://login-goole.vercel.app/api/oauth/google", "_self");
  // };

  async function handleClick() {
    const smth = await axios.get(
      "https://api.vatandoshlarfondi.uz/api/oauth/google"
    );

    console.log(smth);

    // const getUser = axios
    // .get("https://api.vatandoshlarfondi.uz/api/oauth/call-back/google")
    // .then((res) => res.data);

    // console.log(getUser);
  }
  // useEffect(() => {}, []);

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
