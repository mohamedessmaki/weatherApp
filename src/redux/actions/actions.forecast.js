import * as config from "../../config";
import * as helpers from "../../helpers";
import axios from "axios";
import * as actionInfo from "./actions.info"

export const SET_FORECAST = "SET_FORECAST";
export const SET_CITY_NAME = "SET_CITY_NAME";

export const setForecastById = (cityId) => (dispatch) => {
  axios
    .get(
      `${config.weatherApiConfig.API_URI}?id=${cityId}&appid=${config.weatherApiConfig.API_KEY}`
    )
    .then((res) => {
      const filtredForcast = helpers.listFilter(res.data.list),
        forecast = res.data;
        dispatch({ type: SET_FORECAST, forecast, filtredForcast });
        dispatch({ type: SET_CITY_NAME, cityName: `${forecast.city.name}, ${forecast.city.country }`});
        dispatch(actionInfo.setLoading(false));
    }).then(() => {
        dispatch(actionInfo.setLoading(false));
    });
};

export const setForecastByName = (cityName) => (dispatch) => {
  dispatch(actionInfo.setPending(true))
  axios
    .get(
      `${config.weatherApiConfig.API_URI}?q=${cityName}&appid=${config.weatherApiConfig.API_KEY}`
    )
    .then((res) => {
      const filtredForcast = helpers.listFilter(res.data.list),
        forecast = res.data;
        dispatch({ type: SET_FORECAST, forecast, filtredForcast });
        dispatch(actionInfo.setStatus(''))
    }).catch(function (error) {
        dispatch({ type: SET_FORECAST, forecast:{}, filtredForcast:[] });
        dispatch(actionInfo.setStatus('notFound'))
    }).then(() => {
        dispatch(actionInfo.setPending(false))
    });
};

export const setCityName = (cityName) => ({ type: SET_CITY_NAME, cityName });
