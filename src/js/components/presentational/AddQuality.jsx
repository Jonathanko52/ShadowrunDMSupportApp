import React from "react";

const AddQuality = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        let type
        if(document.getElementById('typep').checked){
            type = 'postive'
        } else if (document.getElementById('typen').checked){
            type = 'negative'
        } else {
            type = 'unselected'
        }
        props.addAction({
            quality:document.getElementById('quality').value,
            notes:document.getElementById('notes').value,
            type:type

        })
    }}>
    <b>Quality:</b><input id='quality'></input>
    <b>Notes:</b><input id='notes'></input>
    <b>Type: </b>

    Positive<input name='quality' type="radio" id="typep" value="positive"></input>
    Negative<input name='quality' type="radio" id="typen" value="negative"></input>
    <input type="submit"></input>
    </form>

);

export default AddQuality;