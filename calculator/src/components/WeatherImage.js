import "./WeatherImage.css"
const WeatherImage = (props) => {


  return (
    <div>
    <img src={props.url} alt={props.alt}></img>
    </div>
  )
}

export default WeatherImage;