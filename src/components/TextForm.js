import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    //text = "new text";// wrong way to change the state. 
    //setText("new text");// correct way to change the state.

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <label htmlFor='myBox' className='form-label'></label>
                    <textarea className='form-control' id="myBox" value={text} rows={6} onChange={handleOnChange} placeholder='Enter your text'></textarea>
                    <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={handleLowerClick}>Convert to lowercase</button>
                    {/* <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to uppercase</button> */}
                </div>
            </div>
            <div className='container my-3'>
                <h6>Your Text Summary</h6>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
