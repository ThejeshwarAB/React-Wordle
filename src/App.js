import { useEffect, useState } from "react";
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const url = 'http://localhost:8000/solutions' //this is used for local reference
    // const url = 'https://raw.githubusercontent.com/ThejeshwarAB/React-Wordle/master/data/db.json?token=GHSAT0AAAAAACAECXAV7NZV36MWTTOA5Z5SZA4XNHA'
    
    fetch(url)
      .then((result) => result.json())
      .then((data) => {

        //assigns a random word from the list
        // console.log(data.solutions)
        // data = data.solutions
        const randomSolution = data[Math.floor(Math.random() * data.length)]
        setSolution(randomSolution.word)
      })
      
  }, [setSolution])

  return (
    <div className="App">
      <h1 style={{color:"darkmagenta"}}>React Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
