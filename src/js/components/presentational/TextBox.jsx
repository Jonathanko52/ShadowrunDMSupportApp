import React from "react";

const TextBox = (props) => (
    <form className = {props.boxProps}>
    <b>{props.name}:</b> {props.curVal}<input id = {props.storeVal} size = {props.boxSize}></input>
   </form>
);

export default TextBox;