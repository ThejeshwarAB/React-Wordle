import { useEffect } from "react";

const Row = ({guess, currentGuess}) => {
    if (guess) {
        return (
          <div className="row past">
            {guess.map((element, index) => (
              <div key={index} className={element.color}>{element.key}</div>
            ))}
          </div>
        )
      }
      if (currentGuess) {
        let letters = currentGuess.split('')
    
        return (
          <div className="row current">
            {letters.map((letter, i) => (
              <div key={i} className="filled">{letter}</div>
            ))}
            {[...Array(5 - letters.length)].map((_,index) => (
              <div key={index}></div>
            ))}
          </div>
        )
      }
      
        return(
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