import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Type your text / Ctrl + V to paste');

    const convertTextToUpperCase = () => {
        let txt = text.toLocaleUpperCase();
        setText(txt);
    }
    const clearText = () => {
        let txt = "";
        setText(txt);
    }
    const convertTextToLowerCase = () => {
        let txt = text.toLocaleLowerCase();
        setText(txt);
    }
    const methodOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div className="container mt-4">
                <h2>Text Analyzer</h2>

                <div className="mb-2">
                    <label htmlFor="myBox" className="form-label text-secondary">Enter your text below to analyze</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={methodOnChange}></textarea>
                </div>

                <button className="btn btn-outline-primary mx-1" onClick={convertTextToUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary" onClick={convertTextToLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary mx-1" onClick={clearText}>Clear Textarea</button>
            </div>

            <div className="container mt-4">
                <h4>Summary</h4>
                <p>{text.split(" ").length - 1} words</p>
                <p>{text.length} characters (including spaces)</p>
                <p>{text.replace(/ /g, '').length} characters (excluding spaces)</p>
                <p>Reading time: {Math.ceil((text.split(" ").length - 1) * 0.008)} min </p>
            </div>
        </>
    )
}
