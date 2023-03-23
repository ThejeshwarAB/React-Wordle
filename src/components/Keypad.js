import { useEffect, useState } from "react";

const KeyPad = ({ usedKeys }) => {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:8000/letters' //this is used for local reference
        // const url = 'https://raw.githubusercontent.com/ThejeshwarAB/React-Wordle/master/data/db.json?token=GHSAT0AAAAAACAECXAV7NZV36MWTTOA5Z5SZA4XNHA'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // data = data.letters
                setLetters(data)
            })
    }, [setLetters])
    return (
        <div className="keypad">
            {letters && letters.map((letter) => {
                const color = usedKeys[letter.key]
                return <div key={letter.key} className={color}>{letter.key}</div>
            })}
        </div>
    );
}

export default KeyPad;