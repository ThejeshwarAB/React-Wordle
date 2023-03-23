import { useEffect, useState } from "react";
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {

    const url = 'http://localhost:8000/solutions'

    fetch(url)
      .then((result) => result.json())
      .then((data) => {

        //assigns a random word from the list
        const randomSolution = data[Math.floor(Math.random() * data.length)]
        setSolution(randomSolution.word)
      })
      
  }, [setSolution])

  return (
    <div className="App">
      <p>React Wordle</p>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
