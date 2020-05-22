import React, { useEffect, useRef } from "react"
import * as actionForecast from "./redux/actions/actions.forecast"
import * as actionInfo from "./redux/actions/actions.info"
import { useSelector, useDispatch } from "react-redux"
import DailyForecast from "./components/DailyForecast"
import * as helpers from "./helpers"

const App = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const { 
            filtredForcast, 
            cityName
          
        } = useSelector((state) => ({
            filtredForcast: state.forecastReducer.filtredForcast,
            cityName: state.forecastReducer.cityName,
         
        }))
 
  useEffect(() => {

    const cityId = helpers.getCityId()
  
 
      dispatch(actionForecast.setForecastById(cityId))
    

  },[])

  return (
    <div className="weather ">
           
          <>
            <div className="search">
              <input
                ref={inputRef}
                className="search__input"
                type="text"
                defaultValue={cityName}
              />
              <button
                className="search__button"
                onClick={() => {
                  inputRef.current.focus()
                  const value = inputRef.current.value
                  value !== '' && 
                  dispatch(actionForecast.setForecastByName(value))
                }}>
                Find
              </button>
            </div>
              {
                filtredForcast.length > 0 &&
                <div className="result">
                {
                  filtredForcast.map((forcatsData, index) => (
                     console.log(forcatsData)
                  ))
                }
                </div>
              }
              
          </>
          
    </div>
  )
}

export default App
