import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import KeyPad from "./Keypad";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
    //custom hook useWordle is used here
    const { currentGuess, guesses, isCorrect, turn, usedKeys, handleKeyup } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    //useEffect here is called when user inputs in the screen 
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        //if user is out of turns
        if (turn > 5) {
            console.log("sorry, you are out of turns!")
            setTimeout(()=>setShowModal(true),1000)
            window.removeEventListener('keyup', handleKeyup);
        }

        //if user guessed it right
        if (isCorrect) {
            console.log("congrats, you found it!")
            setTimeout(()=>setShowModal(true),1000)
            window.removeEventListener('keyup', handleKeyup);
        }

        //cleanup function
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])

    return (
        <div>
            {/* <p>Current solution - {solution}</p> */}
            {/* <p>Current solution - {solution}</p>
            <p>Current guess - {currentGuess}</p>
            <p>Current history - {history}</p> */}
            {/* <p>Guesses - {guesses}</p> */}
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <KeyPad usedKeys={usedKeys} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    );

}

export default Wordle;