import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
    //custom hook useWordle is used here
    const { currentGuess, guesses, history, turn, handleKeyup } = useWordle(solution)

    //useEffect here is called when user inputs in the screen 
    useEffect(()=>{
        window.addEventListener('keyup',handleKeyup)

        //cleanup function
        return ()=> window.removeEventListener('keyup',handleKeyup);
    },[handleKeyup])

    return (
        <div>
            <p>Current solution - {solution}</p>
            {/* <p>Current solution - {solution}</p>
            <p>Current guess - {currentGuess}</p>
            <p>Current history - {history}</p> */}
            {/* <p>Guesses - {guesses}</p> */}
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
        </div>
    );

}

export default Wordle;