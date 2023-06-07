import React from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const { path } = useLocation();

  return <div>{path}</div>;
};

export default Redirect;
