import React, {useEffect, useState} from "react"

const Cardweather = ({tempInfo}) =>{
    const [weatherState, setWeatherState] = useState("")
    const {
        name,
        temp,
        humidity,
        pressure,
        weathermood,
        speed,
        country,
        sunset
    } = tempInfo

    useEffect(()=>{
        if(weathermood){
            switch (weathermood){
                case "Clouds": setWeatherState("wi-day-cloudy")
                    break
                case "Haze": setWeatherState("wi-fog")
                    break
                case "Smoke": setWeatherState("wi-smoke")
                    break
                case "Clear": setWeatherState("wi-day-sunny")
                    break
                case "Mist": setWeatherState("wi-hail")
                    break
                default: setWeatherState("wi-day-sunny")
                    break
            }
        }
    }, [weathermood])

    // to convert time
    let date = new Date(sunset*1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    return(
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/*Our 4 columns*/}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} PM<br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}<br/>
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}<br/>
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">
                                {speed}<br/>
                                Wind Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Cardweather