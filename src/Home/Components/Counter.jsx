import React from "react";

const counters = [
  {
    count: 78,
    title: "Wedding cakes",
  },
  {
    count: 23,
    title: "Artisan breads",
  },

  {
    count: 7,
    title: "Custom cakes",
  },
  {
    count: 374,
    title: "Tarts and pies",
  },
];
function Counter() {
  return (
    <div className="counter">
      <div className="container">
        <div className="title-logo">
          <h2>COUNTERS</h2>
        </div>
        <div className="title-seperator"></div>
        <div className="counters">
          {/* <div className="counter-box">
          <h2>78</h2>
            <p>Wedding cakes</p>
          </div>
          <div className="counter-box">
            <h2>23</h2>
            <p>Artisan breads</p>
          </div>
          <div className="counter-box">
            <h2>7</h2>
            <p>Custom cakes</p>
          </div>
          <div className="counter-box">
            <h2>374</h2>
            <p>Tarts and pies</p> 
          </div>  */}
          {counters.map((counterItem, index) => (
            <SingleCounter {...counterItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
export function SingleCounter({ title, count }) {
  return (
    <div className="counter-box">
      <h2>{count}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Counter;
