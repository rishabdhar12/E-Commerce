import React from "react";

const PriceSlider = ({ maxPrice, changePriceRange }) => {
  let init_state = {
    value: maxPrice,
  };
  const [state, setState] = React.useState(init_state)

  const handleOnChange = (e) => {
    setState({ value: e.target.value });
    changePriceRange(state.value);
  };
  return (
    <React.Fragment>
      <div className="value">$ {state.value}.00</div>
      <input className="price-range"
        type="range"
        min={0}
        max={maxPrice}
        value={state.value}
        step="100"
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
}
export default PriceSlider;