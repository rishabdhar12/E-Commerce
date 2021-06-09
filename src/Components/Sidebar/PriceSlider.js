import React from "react";

export default class Slider extends React.Component {
  state = {
    value: 0,
  };
  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.changePriceRange(this.state.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="value">{this.state.value}</div>
        <input
          type="range"
          min={0}
          max={this.props.maxPrice}
          value={this.state.value}
          step="100"
          onChange={this.handleOnChange}
        />

      </React.Fragment>
    );
  }
}
