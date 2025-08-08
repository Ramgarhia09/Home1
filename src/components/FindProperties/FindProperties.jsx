import React from 'react';
import './FindProperties.css';

const FindProperties = () => {
  return (
    <div className="FindProp">
      <h2>Find Properties in These Cities</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="card-wrapper">
        {/* Top Row */}
        <div className="card-row">
          <div
            className="card card1"
            style={{ backgroundImage: "url('/22.svg')" }}
          ></div>

          <div
            className="card card2"
            style={{ backgroundImage: "url('/23.svg')" }}
          ></div>

          <div
            className="card card3"
            style={{ backgroundImage: "url('/24.svg')" }}
          ></div>
        </div>

        {/* Bottom Row */}
        <div className="card-row">
          <div
            className="card card4"
            style={{ backgroundImage: "url('/25.svg')" }}
          ></div>

          <div
            className="card card5"
            style={{ backgroundImage: "url('/26.svg')" }}
          >
            <div className="overlay"></div>
          </div>

          <div
            className="card card6"
            style={{ backgroundImage: "url('/27.svg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
