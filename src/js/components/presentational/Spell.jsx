import React from "react";

const Spell= (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Spell/Power/Ritual/ComplexForm:</b><input>{props.spell}</input>
    <b>Type/Target:</b><input>{props.type}</input>
    <b>Range:</b><input>{props.range}</input>
    <b>Duration:</b><input>{props.duration}</input>
    <b>Drain:</b><input>{props.drain}</input>
    <input type="submit" value = "Remove"></input>

   </form>
);

export default Spell;