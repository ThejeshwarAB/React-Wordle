import { useEffect, useState } from "react";

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
      <p style={{ textAlign: "center" }}>React Wordle</p>
      <p>{solution}</p>
    </div>
  );
}

export default App;
