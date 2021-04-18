import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ height: 130, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
