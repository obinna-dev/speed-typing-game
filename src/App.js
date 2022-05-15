import React, { useEffect, useState } from "react"
import "../src/styles.css"

export default function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)

    useEffect(()=>{
        if (timeRemaining > 0) {
        setTimeout(()=>{
            setTimeRemaining(prevState => (prevState - 1))
        }, 1000)
    }}, [timeRemaining])

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function wordCount(txt)    {
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