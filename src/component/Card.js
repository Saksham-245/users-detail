import React from "react";
import "./Card.css";

const Card = ({ firstname, lastname, source }) => {
  return (
    <div className="card">
      <img src={source} className="card-img-top" alt="" />
      <div className="card-body">
        <h4 className="card-title">
          {firstname} {lastname}
        </h4>
        <div className="card-detail">
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
