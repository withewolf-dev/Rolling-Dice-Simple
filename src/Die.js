import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    const { face, rolling } = this.props;
    return (
      <div>
        <i class={`die fas fa-dice-${face} ${rolling && "shaking"}`} />
      </div>
    );
  }
}
export default Die;
