import React from "react";

export default function ClickComponent(props) {
  return (
    <div>
      <h1 onClick={() => props.handleClick()}>Click Text: {props.count}</h1>
    </div>
  );
}
