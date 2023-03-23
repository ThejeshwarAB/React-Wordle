import { useState } from "react"

const useWordle = (solution) => {

  const [turn, setTurn] = useState(0) //number of guesses taken
  const [currentGuess, setCurrentGuess] = useState('') //current guess
  const [guesses, setGuesses] = useState([...Array(6)]) //each guess is stored as an object
  const [history, setHistory] = useState([]) //each guess is stored as a string
  const [isCorrect, setIsCorrect] = useState(false) //if solution is found or not
  const [usedKeys, setUsedKeys] = useState({}) //updates the keypad accordingly
  //eg. {'a':'green','b':'grey','c':'yellow'}

  //formats each guess into an object
  //guesses store array of such objects
  //each object has key and color eg. {key: 'a',color: 'green'}
  const formatGuess = () => {
    console.log(currentGuess)

    const solutionArray = [...solution];
    const formattedGuess = [...currentGuess].map((letter) => {
      //by default grey color is passed
      return { key: letter, color: "grey" }
    })

    //check for green color - exact match i.e position & letter
    formattedGuess.forEach((element, index) => {
      if (solutionArray[index] === element.key) {
        formattedGuess[index].color = 'green'
        solutionArray[index] = null //to avoid double matching
      }
    })

    //check for yellow color - approx match i.e letter but not position
    formattedGuess.forEach((element, index) => {
      if (solutionArray.includes(element.key) && element.color !== 'green') {
        formattedGuess[index].color = 'yellow'
        solutionArray[solutionArray.indexOf(element.key)] = null //to avoid double matching
      }
    })

    return formattedGuess

  }

  //adds new guess to guesses state
  //updates isCorrect state if guess is correct
  //updates turn state by 1 for every guess made
  const addNewGuess = (formattedGuess) => {

    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses(prevGuesses => {
      var newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prevHistory => [...prevHistory, formattedGuess]
    )

    setTurn(prevTurn => prevTurn + 1)

    //set current guess to empty
    setCurrentGuess('')

    setUsedKeys((prevUsedKeys)=>{
      let newKeys = {...prevUsedKeys}

      formattedGuess.forEach((element)=>{
        const currentColor = newKeys[element.key]
        if(element.color === 'green'){
          newKeys[element.key]='green'
          return 
        }
        if(element.color === 'yellow' && currentColor!=='green'){
          newKeys[element.key]='yellow'
          return
        }
        if(element.color === 'grey' && currentColor!=='yellow' && currentColor!=='grey'){
          newKeys[element.key]='grey'
          return
        }
      })

      return newKeys
    })

    console.log(guesses)
  }

  //when user types something, this function is called
  //when user typer enter new guess is added to the list
  const handleKeyup = ({ key }) => {

    // console.log(key)

    if (key === 'Enter') {
      //3 conditions to be checked here

      //1.number of turns should be less than 6
      if (turn > 5) {
        console.log("you used all your guesses")
        return
      }

      //2.length of user guess input must be 5
      if (currentGuess.length !== 5) {
        console.log("word must have 5 letters")
        return
      }

      //3.check for word in the history
      if (history.includes(currentGuess)) {
        console.log("you tried that word already")
        return
      }

      const formattedGuess = formatGuess()
      addNewGuess(formattedGuess)
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }

    if (/^[a-zA-Z]$/.test(key)) {
      console.log(key)
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }

  }

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup }
}

export default useWordle;