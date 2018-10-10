import React from "react";

const AddAugmentation = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            augmentation:document.getElementById('augmentation').value,
            rating:document.getElementById('rating').value,
            notes:document.getElementById('notes').value,
            essence:document.getElementById('essence').value
        })
    }}>
    <b>Augmentation:</b><input id='augmentation'></input>
    <b>Rating:</b><input id='rating'></input>
    <b>Notes:</b><input id='notes'></input>
    <b>Essence:</b><input id='essence'></input>
    <input type="submit"></input>
    </form>

);

export default AddAugmentation;