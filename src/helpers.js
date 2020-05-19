import moment from "moment";

export const listFilter = (list) => {
  let filtredForecastList = list ? list : [];
  const currentDateTime = moment(filtredForecastList[0].dt_txt),
    dateFormat = "YYYY-MM-DD HH:mm",
    daysRange = [
      currentDateTime.format(dateFormat),
      currentDateTime.add(1, "d").format(dateFormat),
      currentDateTime.add(1, "d").format(dateFormat),
      currentDateTime.add(1, "d").format(dateFormat),
    ];

  // filter down to get 4 days range from today
  filtredForecastList = filtredForecastList.filter((el) =>
    daysRange.includes(moment(el.dt_txt).format(dateFormat))
  );

  // early day and temp conversion 
  filtredForecastList = filtredForecastList.map((el) => ({
    ...el,
    day_ordinal: getDayAndOrdinal(el.dt_txt),
    temp_cel: (el.main.temp - 273.15).toFixed(2),
    temp_fah: ((el.main.temp - 273.15) * 9/5 + 32).toFixed(2),
  }));

  return filtredForecastList;
};

export const getCityId = () => {
  let cityId = document.getElementById("root")
  cityId = cityId ? cityId.getAttribute("data-cityid") : null
  const cityIdParam = new URLSearchParams(window.location.search).get("cityid");
  cityId = cityIdParam ? cityIdParam : cityId;
 return  cityId
};

export const getDayAndOrdinal = (date) => {
  date = moment(date);
  const currentDateTime = moment(),
    dayAndOrdinal =
      date.format("YYYY-MM-DD") === currentDateTime.format("YYYY-MM-DD")
        ? `Today ${date.format("Do")}`
        : `${date.format("dddd")} ${date.format("Do")}`;
  return dayAndOrdinal;
};
