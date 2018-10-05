import React from "react";

const TextBox = (props) => (
    <form className = {props.className}
    onSubmit={(event)=>{
        event.preventDefault()
        props.submitText(props.storeVal)
  
        }}>
    <b>{props.name}:</b> {props.curVal}<br></br>
    <input id = {props.storeVal} ></input>
    <button>Submit</button>
   </form>
);

export default TextBox;