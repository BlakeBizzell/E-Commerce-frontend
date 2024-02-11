import React from "react";
import { Link as RouterLink } from "react-router-dom";

const MainContainer = ({ selectedLink }) => {
  return <RouterLink to={selectedLink}>{selectedLink}</RouterLink>;
};

export default MainContainer;
