import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Facebook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.search.slice(6));

  const url = location.search.slice(6);

  useEffect(() => {
    const getFacebookUser = async () => {
      try {
        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/facebook?code=${url}`
          )
          .then((res) => res.data);

        console.log(user);
        if (user.token) {
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getFacebookUser();
  }, []);

  return <div>Facebook</div>;
};

export default Facebook;
