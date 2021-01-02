import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

import Title from "../Title";

export default function Sellers(props) {
  const { title, children } = props;

  return (
    <div className="bestSellers" id="bestSellers">
      <div className="bestSellers__header">
        <Title title={title} />
        <p className="sellers__more txt-up">
          <Link to="/">khám phá thêm</Link>
        </p>
      </div>
      <div className="bestSellers__content">{children}</div>
    </div>
  );
}
