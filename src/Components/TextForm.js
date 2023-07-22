import React, { useState } from 'react'

const TextForm = (props) => {
    
    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
        <div className='container'>
            <h2>{props.header}</h2>
            <div className='mb-3'>
                <textarea className='form-control' id='myBox' rows={8} value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-3' onClick={handleDownClick}>Conbert to lower case</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} word and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm