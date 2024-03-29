import "./style.css"

import React, { useEffect, useState } from 'react'

export default function Typewriter({arr, charDelay, color, fontSize}) {
    const [currCharInd, setcurrCharInd] = useState(0)
    const [currWordInd, setcurrWordInd] = useState(0)
    const [curWord, setcurWord] = useState("")
    useEffect(() => {
      const timeOut = setInterval(() => {
        if(currWordInd==arr.length){
            setcurrWordInd(0)
            setcurWord("")
            return 
        }
        if(currCharInd==arr[currWordInd].length){
            setcurrWordInd(currWordInd+1);
            setcurrCharInd(0)
            setcurWord("")
            return
        }
        let word = arr[currWordInd];
        setcurWord(curWord+word.charAt(currCharInd));
        setcurrCharInd(currCharInd+1);
      }, charDelay);
      return () => {
        clearInterval(timeOut)
      }
    })
  return (
    <div className="typewriter" style={{"color":{color}, "font-size":fontSize}}>
        {curWord}
    </div>
  )
}
