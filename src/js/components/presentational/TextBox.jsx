import React from "react";

const TextBox = (props) => (
    <form className = {props.boxClass} >
    {props.name}:<input 
    id = {props.storeVal} 
    size = {props.boxSize} 
    value = {props.curVal} 
    onChange = {()=>{
        props.savePersonal()
        console.log('SAVE PERSONAL INVOKED')
    }}></input>
   </form>
);

export default TextBox;