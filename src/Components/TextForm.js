import React, { useState } from 'react'

const TextForm = (props) => {
    
    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h2>{props.header}</h2>
            <div className='mb-3'>
                <textarea className='form-control' id='myBox' rows={8} value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to upper case</button>
        </div>
    )
}

export default TextForm