import { SET_FORECAST, SET_CITY_NAME } from "../actions/actions.forecast";

export const initialForecastState = {
  forecast: {},
  cityName: "",
  filtredForcast: [],
};

export const forecastReducer = (state = initialForecastState , action) => {
  switch (action.type) {
    case SET_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
        filtredForcast: action.filtredForcast,
      };
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.cityName,
      };
    default:
      return state;
  }
};
