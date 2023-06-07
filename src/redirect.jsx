import React from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const { path } = useLocation();

  console.log(path);

  return <div>{path}</div>;
};

export default Redirect;
