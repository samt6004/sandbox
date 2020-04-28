import React from "react";
import "./styles.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increseCounter = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("count", this.state.count);
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.increseCounter)}</div>
    );
  }
}
