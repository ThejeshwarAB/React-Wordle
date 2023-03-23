import useWordle from "../hooks/useWordle";
import Row from "./Row";

const Grid = ({ turn, currentGuess, guesses }) => {

    // const { turn, currentGuess, guesses } = useWordle();

    return (
        <div>
            {guesses.map((guess, index) => {
                if (turn === index) {
                    return <Row key={index} currentGuess={currentGuess} />
                }
                return <Row key={index} guess={guess} />
            })}
        </div>
    );
}

export default Grid;