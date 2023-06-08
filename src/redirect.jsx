import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  console.log(location.search.slice(7));

  const url = location.search.slice(7);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/facebook?code=${url}`
          )
          .then((res) => res.data);

        console.log(user);
      } catch (e) {
        console.log(e);
      }
    };

    getUser();
  }, []);

  return <div>hwqugduiqwgdiuqwg</div>;
};

export default Redirect;
