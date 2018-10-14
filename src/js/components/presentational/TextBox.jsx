import React from "react";

const TextBox = (props) => (
    <form className = {props.boxClass} >
    <b>{props.name}:</b><input 
    id = {props.storeVal} 
    size = {props.boxSize} 
    defaultValue = {props.curVal} 
    onChange = {()=>{
        props.savePersonal()
        console.log('SAVE PERSONAL INVOKED')
    }}></input>
   </form>
);

export default TextBox;