import React,  { useState } from 'react'

//console.log(useState('Enter text here'))
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case was clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const  handleOnChange= (event)=>{
        console.log("On change")
        setText(event.target.value);
        props.showAlert("text changed!","success");
    }
    const handleLoClick = ()=>{
        console.log("upper case was clicked"+text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to Lowercase!","success");
    }
    const handlecopy=()=>{
        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied to clipboard!","success");
    }
    const handlextraspaces=()=>{
       let newText= text.split(/[ ]+/);
       setText(newText.join(""))
       props.showAlert("extra spaces are removed from the text!","success");
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container"  style={{color:props.Mode==='dark'?'white':'black'}}>
            <h1>
                {props.heading}
            </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundcolor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handlextraspaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3"  style={{color:props.Mode==='dark'?'white ':'black'}}>        
       {/* return sentence.join(" ");*/}
       <h1> Your text summary</h1>
       <p>{text.split(" ").length}3243 words and {text.length}435672 characters</p>
       <p>{0.008 *text.split(" ").length }Minutes read</p>
       <h2>PREVIEW</h2>
       <p>{text}</p>
      </div>
      </>
    )
} 