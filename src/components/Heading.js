import React from "react";
import "./HeadingStyle.scss";

const Heading = (props) => {
  return (
    <nav id="navbar">
      <div id="logo">
        <a href="#"></a>
      </div>
      <ul>
        <li>
          <a href="#">Polska</a>
        </li>
        <li>
          <a href="#">Europa</a>
        </li>
        <li>
          <a href="#">Swiat</a>
        </li>
        <li>
          <a href="#">Tygodniowa</a>
        </li>
      </ul>
    </nav>
  );
};

export default Heading;
