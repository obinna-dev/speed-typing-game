import React, { useState } from "react"
import "../src/styles.css"

export default function App() {

    const [text, setText] = useState("")

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function wordCount(txt)    {
        const wordsArr = txt.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    console.log(text)
    return (
        <div>
            <h1>How fast do you type</h1>
            <textarea 
            onChange={handleChange}
            placeholder="Start Typing"
            value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={()=>{wordCount(text)}}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}