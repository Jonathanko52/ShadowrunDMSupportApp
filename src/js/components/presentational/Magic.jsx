import React from "react";

const Magic = (props) => (
    <form className = {props.className}>
    <b>Spell/Power/Ritual/ComplexForm:</b><input>{props.spell}</input>
    <b>Type/Target:</b><input>{props.type}</input>
    <b>Range:</b><input>{props.range}</input>
    <b>Duration:</b><input>{props.duration}</input>
    <b>Drain:</b><input>{props.drain}</input>

   </form>
);

export default Magic;