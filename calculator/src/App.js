import './App.css';
import Numbers from './components/Numbers';
import Clock from './components/Clock';
import Timer from './components/Timer';
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      <Numbers />
      <Timer />
      <Clock />
      <Weather />
    </div>
  );
}

export default App;
