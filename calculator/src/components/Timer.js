import React from 'react'
import './Timer.css'
import { useState} from 'react';

const Timer = () => {

    const [time, setTime] = useState(0);

    

    const myTimer= (number) => {
        setTime(number);
        console.log("Start" + time);
         if (time === 0) { 
            console.log(time + "else")
            clearInterval(myInterval);
        console.log("Stop")}

        else if (time === undefined || time === null || time.isNaN) {
            clearInterval(myInterval);
        }
        
        else if (time <= -1 ) { clearInterval(myInterval);}
        
        else if 
        (time !== 0 ){
            setTime(time - 1);
            clearInterval(myInterval);
            (console.log("stop is set"))
        }
        
        
    };

    const myInterval = setInterval(myTimer, 1000);


  return (
    <div className = "timer">

        {time > 0 || null ? <h1 className="timerShow">{time}</h1> : time === 0 ? <h1 className ="timerShow">Time is up!</h1> : <h1 className="timerShow">Timer</h1>}
        <div className="timerButtons">
        <button onClick={() => myTimer(10)}>10s</button>
        <button onClick={() => myTimer(30)}>30s</button>
        <button onClick={() => myTimer(60)}>60s</button>
        </div>
       
       
        

        
        
        
    </div>
  )
}

export default Timer;