import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { GiCompass, GiDiamondHard, GiPapers } from "react-icons/gi";

const Home = () => {
  return (
    <React.Fragment>
      <section className="horizontal-container first-container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          explicabo perspiciatis consectetur eveniet, nam minima maxime dolorem
          soluta quas temporibus laborum dignissimos rerum rem adipisci animi
          eum placeat quis? Fugit beatae placeat aut dolore sed facere
          necessitatibus totam, unde est velit cupiditate culpa minus temporibus
          tempora deleniti deserunt ratione. Est atque pariatur, labore nisi
          quos nulla suscipit iusto corporis nostrum quo vitae repellat sint
          excepturi alias. Sequi, animi.
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </p>
        <div className="hero-images">
          <img src="/Images/hero-bcg.a876f19f.jpeg" alt="" id="img-1" />
          <img src="/Images/hero-bcg-2.78991864.jpeg" alt="" id="img-2" />
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
