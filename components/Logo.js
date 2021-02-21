import React from "react";
import Tally from "../svgs/logo.svg";
// import theme from "../styles/theme"

const Logo = () => (
  <header style={{ display: "flex", justifyContent: "center" }}>
    {" "}
    <Tally
      width={100}
      height={52}
      style={{ position: "absolute", top: "25", backgroundSize: "20px 30px" }}
    />{" "}
  </header>
);

export default Logo;
