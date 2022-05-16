import React, { useEffect, useState } from "react"
import "../src/styles.css"

export default function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunning, setIsTimeRunning] = useState(false)

    useEffect(()=>{
        if (isTimeRunning && timeRemaining > 0) {
        setTimeout(()=>{
            setTimeRemaining(prevState => (prevState - 1))
        }, 1000)
    } else if(timeRemaining === 0) {
        setIsTimeRunning(false)
    }}, [timeRemaining, isTimeRunning])

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function wordCount(txt)    {
        console.log("button clicked")
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
            <button onClick={()=> setIsTimeRunning(true)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}