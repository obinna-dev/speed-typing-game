import React, { useEffect, useState } from "react"
import "../src/styles.css"

export default function App() {
    const GAME_TIME = 10
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(GAME_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)


    useEffect(()=>{
        if (isTimeRunning && timeRemaining > 0) {
        setTimeout(()=>{
            setTimeRemaining(prevState => (prevState - 1))
        }, 1000)
    } else if(timeRemaining === 0) {
        endGame()
    }}, [timeRemaining, isTimeRunning])

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(GAME_TIME)
        setText("")
    }

    function endGame()  {
        setIsTimeRunning(false)
        setWordCount(calcWordCount(text))
    }

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calcWordCount(txt)    {
        console.log(isTimeRunning)
        const wordsArr = txt.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    return (
        <div>
            <h1>How fast do you type</h1>
            <textarea 
            onChange={handleChange}
            placeholder="Start Typing"
            value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}