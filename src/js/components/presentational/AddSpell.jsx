import React from "react";

const AddSpell= (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            spell:document.getElementById('spell').value,
            type:document.getElementById('type').value,
            range:document.getElementById('range').value,
            duration:document.getElementById('duration').value,
            drain:document.getElementById('drain').value
        })
    }}>
    <b>Spell/Power/Ritual/ComplexForm:</b><input id='spell'></input>
    <b>Type/Target:</b><input id='type'></input>
    <b>Range:</b><input id='range'></input>
    <b>Duration:</b><input id='duration'></input>
    <b>Drain:</b><input id='drain'></input>


    <input type="submit"></input>
    </form>

);

export default AddSpell;