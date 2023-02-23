import { Button } from "antd";
import React from "react";
import SVG from "../assets/svgs";
import "./styles.scss";

const Layout = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <SVG.LogoIcon />
        <p className="nameLogo">Agency</p>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Button type="primary" size="large">
        Get started
      </Button>
    </div>
  );
};

export default Layout;
