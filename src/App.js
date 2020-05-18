import React, { useEffect, useRef } from "react";
import DailyForecast from "./components/DailyForecast";
import * as helpers from "./helpers";

const App = () => {
  return (
    <div className="weather ">
      <>
        <div className="search">
          <input className="search__input" type="text" />
          <button className="search__button">Find</button>
        </div>

        <div className="result">
          <DailyForecast />
        </div>

        <div className="info">
          <div className="info__alert">Location not found!</div>
        </div>
      </>

      <div className="loader"></div>
    </div>
  );
};

export default App;
