import { useState } from 'react';
import './Numbers.css';


const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const state = ["+", "-", "*", "/"];



const Numbers = () => {
    const [currentnumber, setCurrentNumber] = useState(numbers[9]);
    const [aState, setAState] = useState(state[0]);
    const [memory, setMemory] = useState(0);

    const operatingFunction = (state) => {
        setMemory(memory + currentnumber);
        setCurrentNumber(0);
        setAState(state);
    }
    
    const viewState = () => {
        if (aState === "+") {
            setCurrentNumber(parseInt(memory) + currentnumber);
        } else if (aState === "-") {
            setCurrentNumber(parseInt(memory) - currentnumber);
        } else if (aState === "*") {
            setCurrentNumber(parseInt(memory) * currentnumber);
        } else if (aState === "/") {
            setCurrentNumber(parseInt(memory) / currentnumber);
        }
        return currentnumber
    }

  return (
    <div className="calc">
        <h1>Calculator</h1>
    <div className="solutionBox">
        <p>{currentnumber}</p>
    </div>
    <div className="operatingBox">
        <div className= "numbersquare">
        
            {numbers.map((number, index) => 
                <button key={index} onClick={() => setCurrentNumber(parseInt(currentnumber.toString() + number.toString()))}>{number}</button>
                )}
    <button onClick = {() => viewState()}> = </button>
    <button onClick = {() => setCurrentNumber(0)}> C </button>
         </div>
    <div className="operatorsBox">
    {state.map((state, index) =>
        <button key={index} onClick={() => operatingFunction(state)}>{state}</button>)}
    </div>
    </div>
    </div>
    
  )
}

export default Numbers