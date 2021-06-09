import React from "react";
import { Link } from "react-router-dom";

import FeaturedSection from "../../Components/Featured";

import { GiCompass, GiDiamondHard, GiPapers } from "react-icons/gi";

//css
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      {/* Hero */}
      <section className="horizontal-container first-container">
        <article className="text-section">
          <h3>Design your</h3>
          <h3>Comfort Zone</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            recusandae molestiae unde non suscipit sint consequuntur consectetur
            pariatur atque est. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta, voluptatem.
          </p>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </article>
        <article className="hero-images">
          <img src="/Images/hero-bcg.a876f19f.jpeg" alt="" class="img-main" />
          <img
            src="/Images/hero-bcg-2.78991864.jpeg"
            alt=""
            class="img-secondary"
          />
        </article>
      </section>

      {/* Featured */}
      <section className="featured">
        <div className="section-center">
          <FeaturedSection />
        </div>
      </section>

      {/* Furniture */}
      <section className="furniture">
        <div className="section-center">
          <article className="section-header">
            <h2>
              Custom Furniture
              <br />
              built only for you
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              itaque beatae dicta illo quasi consequuntur cum nostrum culpa,
              dolorem exercitationem facilis, fuga quam dolorum magni.
            </p>
          </article>
          <div className="services-center">
            <article className="service">
              <span className="service-icon">
                <GiCompass className="icon" />
              </span>
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, corrupti illo amet ducimus expedita fugiat!
              </p>
            </article>
            <article className="service">
              <span className="service-icon">
                <GiDiamondHard className="icon" />
              </span>
              <h4>Our Vision</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, corrupti illo amet ducimus expedita fugiat!
              </p>
            </article>
            <article className="service">
              <span className="service-icon">
                <GiPapers className="icon" />
              </span>
              <h4>Our History</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, corrupti illo amet ducimus expedita fugiat!
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-center">
          <h2>Join our Newsletter and get 20% off !</h2>
          <div className="newsletter-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              consectetur exercitationem repellat non corporis reiciendis
              laudantium sunt, qui ullam et?..
            </p>
            <form className="newsletter-form">
              <input type="email" name="email" placeholder="Enter Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
