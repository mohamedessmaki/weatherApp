import React from "react";

export default function DailyForecast(props) {
  const { day_ordinal, weather, temp_cel, temp_fah } = props.forcatsData;
  const { description, icon } = weather[0];

  return (
    <div className={`result__block   icon-${icon} color-${icon} `}>
      <div className="result__date ">{day_ordinal}</div>
      <div className={`result__icon icon-${icon} `}></div>
      <div className="result__desc ">{description}</div>
      <div className="result__temp ">
        <div className="result__cel ">
          {temp_cel}
          <span>°c</span>
        </div>
        <div className="result__feh ">{temp_fah}°F</div>
      </div>
    </div>
  );
}
