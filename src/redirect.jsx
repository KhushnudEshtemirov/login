import React from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return <div>{pathname}</div>;
};

export default Redirect;
