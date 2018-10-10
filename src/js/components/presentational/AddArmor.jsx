import React from "react";

const AddArmor = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            armor:document.getElementById('armor').value,
            rating:document.getElementById('rating').value,
            notes:document.getElementById('notes').value
        })
    }}>
    <b>Armor:</b><input id='armor'></input>
    <b>Rating:</b><input id='rating'></input>
    <b>Notes:</b><input id='notes'></input>
    <input type="submit"></input>
    </form>

);

export default AddArmor;