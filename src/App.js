import React, { useState } from "react"
import "../src/styles.css"


export default function App() {

    const [textInput, setTextInput] = useState({
        textarea: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setTextInput(prevState => ({[name]:value}))
    }

    console.log(textInput)
    return (
        <div>
            <h1>How fast do you type</h1>
            <textarea 
            onChange={handleChange}
            placeholder="Start Typing"
            value={textInput.textarea}
            name="textArea"
            />
            <h4>Time remaining: ???</h4>
            <button>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}