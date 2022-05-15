import React, { useEffect, useState } from "react"
import "../src/styles.css"

/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 * 
 * 3. Make it so the effect won't run if the time is already at 0
 */

export default function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)

    useEffect(()=>{
        setTimeout(()=>{
            setTimeRemaining(prevState => (prevState > 0 ? prevState - 1 : prevState))
        }, 1000)
    }, [timeRemaining])

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