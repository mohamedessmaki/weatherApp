import React from "react";

export default function DailyForecast(props) {

  return (
    <div className={`result__block   icon-01d color-01d `}>
      <div className="result__date ">Today 15th</div>
      <div className={`result__icon icon-01d `}></div>
      <div className="result__desc ">Broken clouds</div>
      <div className="result__temp ">
        <div className="result__cel ">
          15
          <span>°c</span>
        </div>
        <div className="result__feh ">120°F</div>
      </div>
    </div>
  );
}
