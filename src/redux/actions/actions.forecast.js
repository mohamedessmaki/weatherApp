import * as config from "../../config";
import axios from "axios";
import * as actionInfo from "./actions.info"

export const SET_FORECAST = "SET_FORECAST";
 

export const setForecastById = (cityId) => (dispatch) => {
  axios
    .get(
      `${config.weatherApiConfig.API_URI}?id=${cityId}&appid=${config.weatherApiConfig.API_KEY}`
    )
    .then((res) => {
      console.log(res.data)
    }).then(() => {
      
    });
};

export const setForecastByName = (cityName) => (dispatch) => {
  dispatch(actionInfo.setPending(true))
  axios
    .get(
      `${config.weatherApiConfig.API_URI}?q=${cityName}&appid=${config.weatherApiConfig.API_KEY}`
    )
    .then((res) => {
      console.log(res.data)
        
    }).catch(function (error) {
        
    });
};

 