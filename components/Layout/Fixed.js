import React from "react";
import Navbar from "../Navbar";

function Fixed({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Fixed;
