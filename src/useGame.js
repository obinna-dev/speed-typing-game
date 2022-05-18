import { useEffect, useRef, useState } from "react"

export default function useGame()   {
    
    const GAME_TIME = 10
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(GAME_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)


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
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
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

    return {textBoxRef, isTimeRunning, text, wordCount, handleChange, timeRemaining, startGame}
}