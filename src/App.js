import React, { useEffect, useState } from "react"
import "../src/styles.css"



/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not) 
 */

export default function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [startTimer, setStartTimer] = useState(false)

    useEffect(()=>{
        if (startTimer && timeRemaining > 0) {
        setTimeout(()=>{
            setTimeRemaining(prevState => (prevState - 1))
        }, 1000)
    }}, [timeRemaining])

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function wordCount(txt)    {
        setStartTimer(prevState => !prevState)
        console.log("button clicked")
        console.log(startTimer)
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
            <button onClick={()=>{wordCount(text)}}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}