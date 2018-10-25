import React from "react";

const Spell= (props) => (
    <div>
    <b>Spell/Power/Ritual/ComplexForm:</b><input value={props.spell}></input>
    <b>Type/Target:</b><input value={props.type}></input>
    <b>Range:</b><input value={props.range}></input>
    <b>Duration:</b><input value={props.duration}></input>
    <b>Drain:</b><input value={props.drain}></input>
    <button onClick={()=>{props.remove(props.ind)} }>remove</button>
    <button onClick={()=>{props.setToCurrentSpell(props.ind)} }>Set to current</button>
   </div>
);

export default Spell;