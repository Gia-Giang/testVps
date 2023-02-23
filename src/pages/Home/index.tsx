import React from "react";
import { Button } from "antd";
import Unsplash from "../../assets/imgs/unsplash_xEMsS6Vqryc.png";
import User1 from "../../assets/imgs/Ellipse3.png";
import User2 from "../../assets/imgs/Ellipse4.png";
import User3 from "../../assets/imgs/Ellipse5.png";
import Box from "../../components/Box";
import Svg from "../../assets/svgs";

import "./styles.scss";
import Card from "../../components/Card";

type PropBox = {
  heading: string;
  title: string;
  image: any;
};

const listImg = [User1, User2, User3];

const boxCreative: PropBox = {
  heading: "Creatives Team",
  title: "Simple Web Design Team",
  image: listImg,
};

const boxQuocTe: PropBox = {
  heading: "QUOTES",
  title: "For all members that you want to know everything about Pataya",
  image: {
    img: "",
    name: "Ronald Richards",
    duty: "Ceo Founder",
  },
};

const listCard = [
  {
    Icon: Svg.CursorIcon,
    name: "UX/UI Design",
    title:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    Icon: Svg.CodeIcon,
    name: "Web Developer",
    title:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    Icon: Svg.PresentationIcon,
    name: "Marketing & SEO",
    title:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    Icon: Svg.SparklesIcon,
    name: "Brand Identity",
    title:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <div className="heading-left">
          <span className="text">Digital Manager</span>
          <h1 className="title">Digital Products For Business</h1>
          <p className="introduct">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="buttonWrapper">
            <Button type="primary" size="large" className="button">
              Get Started
            </Button>
            <b>OR</b>
            <a href="#" className="link">
              Watch Video
            </a>
          </div>
        </div>
        <div className="heading-right">
          <div className="creativeTeam"></div>
          <img className="img" src={Unsplash} />
          <Box className={"boxTeam"} {...boxCreative} type={"listImg"} />
          <Box
            className={"boxQuocte"}
            {...boxQuocTe}
            type={"img"}
            colorHeading={"orange"}
          />
        </div>
      </div>
      <div className="servicesWrapper">
        <div className="servicesWrapper-containt">
          <span className="text">Our Services</span>
          <h1 className="title">We Create Best Digital Products</h1>
          <p className="introduct">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button type="primary" className="button">
            Contact Us
          </Button>
        </div>
        <div className="servicesWrapper-card">
          <div className="listCard">
            {listCard.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
