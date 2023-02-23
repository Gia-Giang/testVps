import React from "react";

import "./styles.scss";

interface CardProps {
  Icon: any;
  name: string;
  title: string;
}

const Card = ({ Icon, name, title }: CardProps) => {
  return (
    <div className="card">
      <div className="iconWrapper">
        <div className="icon">
          <Icon />
        </div>
      </div>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Card;
