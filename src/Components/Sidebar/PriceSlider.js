import React from "react";

export default class Slider extends React.Component {
  state = {
    value: 0,
  };
  handleOnChange = (e) => this.setState({ value: e.target.value });
  render() {
    return (
      <React.Fragment>
        <input
          type="range"
          min={0}
          max={this.props.price}
          value={this.state.value}
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </React.Fragment>
    );
  }
}
