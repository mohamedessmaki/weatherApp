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
            cityName, 
            pending, 
            loading, 
            status 
        } = useSelector((state) => ({
            filtredForcast: state.forecastReducer.filtredForcast,
            cityName: state.forecastReducer.cityName,
            pending: state.infoReducer.pending,
            loading: state.infoReducer.loading,
            status: state.infoReducer.status,
        }))
 
        const findForcast = () => {
          inputRef.current.focus()
          const value = inputRef.current.value
          value !== '' && 
          dispatch(actionForecast.setForecastByName(value))
        }

        
  useEffect(() => {

    const cityId = helpers.getCityId()
  
    if (cityId) 
      dispatch(actionForecast.setForecastById(cityId))
    else 
      dispatch(actionInfo.setLoading(false))

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
                onKeyPress = { e => {
                  e.key === 'Enter' && 
                  findForcast()
                   
                }}
              />
              <button
                className="search__button"
                onClick = { e => {
                  e.preventDefault()
                  findForcast()
                }}
                >
                Find
              </button>
            </div>
              {
                filtredForcast.length > 0 &&
                <div className="result">
                {
                  filtredForcast.map((forcatsData, index) => (
                    <DailyForecast key={index} forcatsData={forcatsData} />
                  ))
                }
                </div>
              }
              {
               status === 'notFound'  &&
                <div className="info">
                  <div className="info__alert">
                    Location not found!
                  </div>
                </div>
              }
          </>
          {
            (loading || pending) && <div className="loader"></div>
          }
    </div>
  )
}

export default App
