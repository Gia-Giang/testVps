import React from "react";
import User4 from "../../assets/imgs/Ellipse7.png";
import "./styles.scss";

interface ListImgProps {
  colorHeading?: string;
  heading: string;
  title: string;
  image: any;
  className?: any;
  type: "img" | "listImg";
}
const Box = ({
  heading,
  colorHeading,
  title,
  image,
  type,
  className,
}: ListImgProps) => {
  return (
    <div className={`box ${className}`}>
      <span
        style={{
          color: colorHeading,
        }}
      >
        {heading}
      </span>
      <span className="title">{title}</span>
      <div className="imgList">
        {type == "listImg" ? (
          <>
            {image.map((img: any) => (
              <img className="imgUser" src={img} />
            ))}
            <div className="quantityimg">
              <span>{image.length}+</span>
            </div>
          </>
        ) : (
          <div className="imgUserWrapper">
            <img src={User4} />
            <div className="infomation">
              <b>{image?.name}</b>
              <span>{image?.duty}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
