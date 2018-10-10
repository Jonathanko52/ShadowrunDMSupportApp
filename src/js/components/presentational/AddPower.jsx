import React from "react";

const AddPower = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            name:document.getElementById('name').value,
            rating:document.getElementById('rating').value,
            notes:document.getElementById('notes').value

        })
    }}>
    <b>Name:</b><input id='name'></input>
    <b>Rating:</b><input id='rating'></input>
    <b>Notes:</b><input id='notes'></input>


    <input type="submit"></input>
    </form>

);

export default AddPower;