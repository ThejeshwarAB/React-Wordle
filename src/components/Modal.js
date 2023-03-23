const Modal = ({ isCorrect, turn, solution }) => {
    function reloadPage() {
        window.location.reload();
    }

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>Congratzzz..</h1>
                    <p>You found that in
                        {turn > 1 && (<span> {turn} guesses</span>)}
                        {turn == 1 && (<span> {turn} guess</span>)}
                    </p>
                    <p className="solution">The solution is: {solution}</p>
                    <button onClick={() => reloadPage()}>Play again</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Oops..</h1>
                    <p>You ran out of guesses</p>
                    <p className="solution">The solution is: {solution}</p>
                    <button onClick={() => reloadPage()}>Play again</button>
                </div>
            )}
        </div>
    );
}

export default Modal;