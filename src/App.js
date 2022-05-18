import React, { useEffect, useRef, useState } from "react"
import useGame from "./useGame"
import "../src/styles.css"

export default function App() {
    
    const {
        textBoxRef,
        isTimeRunning,
        text,
        wordCount,
        handleChange,
        timeRemaining,
        startGame
    } = useGame(30)
    

    return (
        <div>
            <h1>How fast do you type</h1>
            <textarea 
                ref={textBoxRef}
                disabled={!isTimeRunning}
                onChange={handleChange}
                placeholder={!isTimeRunning ? "Press Start to begin" : "Start Typing"}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}