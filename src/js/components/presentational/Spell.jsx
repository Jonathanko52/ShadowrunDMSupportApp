import React from "react";

const Spell= (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Spell/Power/Ritual/ComplexForm:</b><input value={props.spell}></input>
    <b>Type/Target:</b><input value={props.type}></input>
    <b>Range:</b><input value={props.range}></input>
    <b>Duration:</b><input value={props.duration}></input>
    <b>Drain:</b><input value={props.drain}></input>
    <input type="submit" value = "Remove"></input>

   </form>
);

export default Spell;