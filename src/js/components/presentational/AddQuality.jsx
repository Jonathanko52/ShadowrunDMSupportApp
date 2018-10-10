import React from "react";

const AddQuality = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            quality:document.getElementById('quality').value,
            notes:document.getElementById('notes').value,
            type:document.getElementById('type').value,

        })
    }}>
    <b>Quality:</b><input id='quality'></input>
    <b>Notes:</b><input id='notes'></input>
    <b>Type:</b><input id='type'></input>

    <input type="submit"></input>
    </form>

);

export default AddQuality;