import React from "react";
import "./styles.css";
import Hover from "./hover";
import ClickComponent from "./click";
import Counter from "./counter";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter
          render={(count, increseCounter) => {
            return <Hover handleHover={increseCounter} count={count} />;
          }}
        />
        <Counter
          render={(count, increseCounter) => {
            return (
              <ClickComponent handleClick={increseCounter} count={count} />
            );
          }}
        />
      </div>
    );
  }
}
