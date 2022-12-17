import { useState, useEffect } from 'react'
import WeatherImage from './WeatherImage'
import "./Weather.css"

const Weather = () => {

  const [items, setItems] = useState([]);
  const [weatherImage, setWeatherImage] = useState();

useEffect(() => {
  const getItems = async () => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=9e262a166c7b4e63116bc9b377a27d4d");
    const data = await res.json();
    setItems(data);

    if (data.weather[0].main === "Clouds") {
      setWeatherImage("https://img.freepik.com/free-vector/white-clouds-set_74855-14204.jpg?w=1060&t=st=1671193250~exp=1671193850~hmac=0a3a66efa2f8a7d1c0ea17a2f43154837394e83a7b30d686317b6450a058cad4")
    } else if (data.weather[0].main === "Clear") {
      setWeatherImage("https://img.freepik.com/free-photo/blue-sky-background-with-clouds_1017-21758.jpg?w=1380&t=st=1671193342~exp=1671193942~hmac=007d93ffb337f74abac81a9f54f3a539e6697a90babcfd80d0d0612833ec82df")
    } else if (data.weather[0].main === "Rain") {
      setWeatherImage("https://img.freepik.com/premium-photo/rain-water-drop-falling-city-street-floor-heavy-rain-day_1962-2005.jpg?w=900")
    } else if (data.weather[0].main === "Snow") {
      setWeatherImage("https://img.freepik.com/free-vector/unfocused-winter-landscape-with-snowflakes_1393-210.jpg?w=900&t=st=1671193396~exp=1671193996~hmac=d8407f2174c8464fe116d227c2816ecb052b28099e5a7360b4f210c5dd665185")
    } else if (data.weather[0].main === "Thunderstorm") {
      setWeatherImage("https://img.freepik.com/free-vector/set-storm-clouds-dark_1284-64595.jpg?w=1060&t=st=1671193423~exp=1671194023~hmac=287771a6192d524a4f1cbc84f1a5e0481b8575cf9fb48b0407df939245440e35")
    } else if (data.weather[0].main === "Mist") {
      setWeatherImage("https://img.freepik.com/free-photo/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background_1048-11333.jpg?w=900&t=st=1671193452~exp=1671194052~hmac=f18a3ece5b37e38572616efcfd661553b353d96850bc5a20977eb28b6a1a7722")
    }

     
  }
  getItems();
}, [])



  return (
    <div className= "WeatherApp">
      {items === undefined ? <h1>Weather is Loading</h1> : <h1>Weather in {items.name}</h1> }
      <WeatherImage url = {weatherImage} alt="todays weather" />
      {items.weather?.map((weather) => <p key = {weather.id}>{weather.description}</p>)}
      {items.main?.temp && <h3>Temperature: {items.main.temp}°C</h3>}
      {items.main?.feels_like && <h3>Feels like: {items.main.feels_like}°C</h3>}

      
    
      
    </div>
  )
}

export default Weather
