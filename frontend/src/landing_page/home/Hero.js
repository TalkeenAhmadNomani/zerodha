/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row justify-content-center text-center">
        <div className="col">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <h1 className="mt-3">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            className="btn btn-primary fs-5 mt-3"
            style={{ width: "50%" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
