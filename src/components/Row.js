const Row = ({ guess, currentGuess }) => {

  //for all the previous guesses
  if (guess) {
    return (
      <div className="row past">
        {guess.map((element, index) => (
          <div key={index} className={element.color}>{element.key}</div>
        ))}
      </div>
    )
  }

  //for the current guess value
  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }

  //for empty rows without guesses
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

}

export default Row;