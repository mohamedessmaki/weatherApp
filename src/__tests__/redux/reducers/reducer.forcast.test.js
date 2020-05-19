import { forecastReducer } from "./../../../redux/reducers/reducer.forecast";

test("Forcast Reducer", () => {

  let ExpectedState = {
    forecast: {},
    cityName: "",
    filtredForcast: [],
  };
  expect(
    forecastReducer(undefined, {
      type: "SET_FORECAST",
      forecast: {},
      filtredForcast: [],
    })
  ).toEqual(ExpectedState);

  ExpectedState = {
    forecast: {},
    cityName: "Rome",
    filtredForcast: [],
  };

  expect(
    forecastReducer(undefined, {
      type: "SET_CITY_NAME",
      cityName: "Rome",
    })
  ).toEqual(ExpectedState);
  
});
