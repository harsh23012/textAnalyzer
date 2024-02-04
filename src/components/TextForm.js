import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap';
// import PropTypes from 'prop-types'


function TextForm(props) {
    const [text,setText] = useState("");

    const toUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const toLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const toClear = ()=>{
        setText("");
        props.showAlert("Text is Cleared", "danger");
    }
    const toCopy = (event)=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied", "success");
    }
    const toRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been reomved.", "success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <div style={props.myStyle}>
        <div className="container" >
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h1 className=' my-3'>Enter Your Text To Analyze</h1></Form.Label>
        <Form.Control id='myBox' as="textarea" rows={6} placeholder='Enter Text Here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?"#212529e6":"white",
    color: props.mode==='dark'?"white":"black"}}/>
      </Form.Group>
      <Button className='mx-3 my-3' variant={`outline-${props.textMode}`} onClick={toUpperCase}  >To UpperCase</Button>
      <Button className='mx-3 my-3' variant={`outline-${props.textMode}`} onClick={toLowerCase}  >To LowerCase</Button>
      <Button className='mx-3 my-3' variant={`outline-${props.textMode}`} onClick={toClear}  >Clear</Button>
      <Button className='mx-3 my-3' variant={`outline-${props.textMode}`} onClick={toCopy}  >Copy Text</Button>
      <Button className='mx-3 my-3' variant={`outline-${props.textMode}`} onClick={toRemoveSpace}  >Remove Extra Spaces</Button>
    </Form>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters.</p>
        <p>Average time required to read this sentance is <b>{(text.length/238).toFixed(3)}</b> minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview."}</p>
    </div>
    </div>
    </div>
  )
}

export default TextForm;
// TextForm.propTypes = {
//     myStyle: PropTypes.style.isRequired;
// }