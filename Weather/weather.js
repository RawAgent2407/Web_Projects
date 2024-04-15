import React, {useEffect, useState} from "react"
import "./style.css"
import Cardweather from "./Cardweather";


const Weather = () =>{
    const [searchValue, setSearchValue] = useState("Gandhinagar")
    const [tempinfo, setTempInfo] = useState({})
    const GetweatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?appid=6c7e7e30ff6df9bc6b22fb28c227ff24&q=${searchValue}&units=metric`;
            const res =  await fetch(url)
            const data= await res.json()
            const {name} = data
            const {temp, humidity, pressure} = data.main
            const {main:weathermood } = data.weather[0]
            const {speed} = data.wind
            const {country, sunset} = data.sys
            const myNewWeather = {
                name,
                temp,
                humidity,
                pressure,
                weathermood,
                speed,
                country,
                sunset
            }
            setTempInfo(myNewWeather)
        } catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        GetweatherInfo();
    })
    return(
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..." autoFocus id="search" className="searchTerm"
                           value={searchValue} onChange = {(e)=>setSearchValue(e.target.value)}/>
                    <button className="searchButton" type="button" onClick={GetweatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <Cardweather tempInfo={tempinfo}/>
        </>
    )
}

export default Weather