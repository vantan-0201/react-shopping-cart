import React from "react";
import "./index.scss";
export default function Title(props) {
  const style = props.style;

  return props.title ? (
    <h4
      style={style ? style : {}}
      className={`main__title txt-up ${props.className ? props.className : ""}`}
    >
      {props.title}
    </h4>
  ) : (
    ""
  );
}
