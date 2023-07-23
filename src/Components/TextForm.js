import React, { useState } from 'react'

const TextForm = (props) => {
    
    const [text, setText] = useState('')
    const [exWord, setExWord] = useState('')
    const [style, setStyle] = useState({
        background: 'white'
    })

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = () => {
        setText(text.toLowerCase())
    }

    const handleUndoClick = () => {
        let undoWord = text.split(' ')
        let word = undoWord.pop()
        setExWord(word)
        setText(undoWord.join(' '))
    }

    const handleRedoClick = () => {
        let undoWord = text.split(' ')
        undoWord.push(exWord)
        if(exWord != '')
        {
            setText(undoWord.join(' '))
        }
        setExWord('')
    }

    const handleClearClick = () => {
        setText('')
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleModeClick = () => {
        if(style.background == 'white')
        {
            setStyle({background: 'red'})
        }else{
            setStyle({background: 'white'})
        }
    }
    let wordCount = 0;
    const countWord = (text) => {
        let arr = text.split(' ')
        for (let index = 0; index < arr.length; index++) {
            if(arr[index] != '')
            {
                wordCount++;
            }
        }
        return wordCount
    }

    return (
        <>
        <div className='container'>
            <h2>{props.header}</h2>
            <div className='mb-3'>
                <textarea className='form-control' id='myBox' rows={8} value={text} onChange={handleOnChange} style={style}></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-3' onClick={handleDownClick}>Convert to lower case</button>
            <button className='btn btn-primary mx-3 my-4' onClick={handleUndoClick}>Undo by word</button>
            <button className='btn btn-primary my-4' onClick={handleRedoClick}>Redo last word</button>
            <button className='btn btn-primary mx-3 my-4' onClick={handleClearClick}>Clear text</button>
            <button className='btn btn-primary mx-3' onClick={handleModeClick}>Change background color</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{countWord(text)} word and {text.length} characters</p>
            <p>{0.008 * countWord(text)} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm