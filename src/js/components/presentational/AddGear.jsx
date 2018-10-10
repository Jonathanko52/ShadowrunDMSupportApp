import React from "react";

const AddGear = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            item:document.getElementById('item').value,
            rating:document.getElementById('rating').value
        })
    }}>
    <b>Item:</b><input id='item'></input>
    <b>Rating:</b><input id='rating'></input>

    <input type="submit"></input>
    </form>

);

export default AddGear;