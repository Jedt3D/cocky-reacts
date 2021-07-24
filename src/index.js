import React from "react";
import ReactDOM from "react-dom";

const name = "Jedt";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    {/* <p>Copyright &copy; {currentYear}</p> */}
    <p>Copyright &copy; {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
