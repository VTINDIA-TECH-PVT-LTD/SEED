// src/components/Counter.jsx
import React from "react";

const Counter = () => {
  return (
    <div className="bg-smoke2 pt-80 pb-80">
      <div className="container">
        <div className="counter-wrap">
          {/* Counter 1 */}
          <div className="counter-card">
            <div className="media-body">
              <h2 className="box-number text-theme">
                <span className="counter-number">10</span>k
                <span className="fw-light">+</span>
              </h2>
              <p className="box-text">Lives Impacted</p>
            </div>
          </div>
          <div className="divider"></div>

          {/* Counter 2 */}
          <div className="counter-card">
            <div className="media-body">
              <h2 className="box-number text-theme2">
                <span className="counter-number">500</span>
                <span className="fw-light">+</span>
              </h2>
              <p className="box-text">Awareness Programs</p>
            </div>
          </div>
          <div className="divider"></div>

          {/* Counter 3 */}
          <div className="counter-card">
            <div className="media-body">
              <h2 className="box-number text-theme">
                <span className="counter-number">200</span>
                <span className="fw-light">+</span>
              </h2>
              <p className="box-text">Active Volunteers</p>
            </div>
          </div>
          <div className="divider"></div>

          {/* Counter 4 */}
          <div className="counter-card">
            <div className="media-body">
              <h2 className="box-number text-theme2">
                <span className="counter-number">50</span>
                <span className="fw-light">+</span>
              </h2>
              <p className="box-text">Community Projects</p>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
