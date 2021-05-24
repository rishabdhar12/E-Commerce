import React from "react";
import { Link } from "react-router-dom";
import featured_data from "../data/feaured_data";

const Featured = () => {
  const [featuredFurnitures, setFeaturedFurnitures] =
    React.useState(featured_data);
  return (
    <React.Fragment>
      <h1>Featured Products</h1>
      <div className="underline"></div>
      <ImageSection featuredFurnitures={featuredFurnitures} />
      <div>
        <Link to="/products" className="btn">
          All Products
        </Link>
      </div>
    </React.Fragment>
  );
};

const ImageSection = ({ featuredFurnitures }) => {
  return (
    <React.Fragment>
      {featuredFurnitures.map((furniture) => {
        const { id, img1, name, price } = furniture;
        return (
          <div key={id} className="featured-items">
            <img className="ftImage" src={img1} alt="" />
            <div className="ftInfo">
              <article className="ftName">{name}</article>
              <article className="ftPrice">{price}</article>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Featured;
