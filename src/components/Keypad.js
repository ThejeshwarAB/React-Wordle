import { useEffect, useState } from "react";

const KeyPad = ({usedKeys}) => {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:8000/letters'
        fetch(url)
            .then(res => res.json())
            .then(data => setLetters(data))
    },[setLetters])
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