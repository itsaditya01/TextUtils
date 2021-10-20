import React from 'react'
import { useState } from 'react'


export default function MainBody(props) {
    const [text, setText] = useState('');

    const HandleUpText = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleOnChange = (event) =>{
        setText(event.target.value);
    }
    const HandleClearText = () =>{
        setText("");
    }
    const HandleLowText = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const HandleCopyText = () =>{
        let newText = document.getElementById('mainText');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const HandleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
        <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea value={text} style={{backgroundColor: props.mode==='light'?'white':'rgb(33,37,41)', color: props.mode==='dark'?'white':'black'}} id="mainText" className="form-control" onChange={HandleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={HandleUpText}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={HandleLowText}>Covert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={HandleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={HandleClearText}>Clear Text</button>

        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Summary</h2>
            <p>{text===''?0:text.split(" ").filter(t => t!=='').length} Words & {text.length} Characters</p>
            <p>{text===''?0.00:0.008 * text.split(" ").filter(t => t!=='').length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text===''?'Enter Text Above to Preview Here':text}</p>
        </div>
        </>
    )
}
