import React from "react";

export default function HoverComponent(props) {
  return (
    <div>
      <h1 onMouseOver={() => props.handleHover()}>Hover Text: {props.count}</h1>
    </div>
  );
}
