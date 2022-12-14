import React, { useState} from 'react';
import './Clock.css';
import ReactCurvedText from "react-curved-text";


let currentTime = new Date().toLocaleTimeString();

const Clock = () => {

    const [time, setTime] = useState(currentTime);

 
        setInterval(() => {
            currentTime = new Date().toLocaleTimeString();
            setTime(currentTime);
        }, 1000);


    return (
        <>
        <div className="time">
            <h1>Time</h1>
            <p className="timeShow">{time}</p>
            <div className="numbers" >
                <ReactCurvedText className="clockNumber"
                width={1400}
                height={800}
                cx={200}
                cy={140}
                rx={100}
                ry={100}
                startOffset={0}
                reversed={true}
                textProps={{ style: { fontSize: 50 } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
                text="IX X XI XII  I  II  III  IV  V  VI  VII  VIII " />
                <div className="clock">
                        <div className="hour-hand" style={{transform: `rotate(${new Date().getHours() * 30}deg)`}}>
                        </div>
                        <div className="minute-hand" style={{transform: `rotate(${new Date().getMinutes() * 6}deg)`}}>
                        </div>
                        <div className="second-hand" style={{transform: `rotate(${new Date().getSeconds() * 6}deg)`}}>
                        </div>
                </div>


                    
                </div>
                </div>

        </>
    )
}
  

export default Clock;
