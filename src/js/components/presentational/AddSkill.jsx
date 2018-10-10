import React from "react";

const AddSkill = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            skill:document.getElementById('skill').value,
            rating:document.getElementById('rating').value,
            type:document.getElementById('type').value,

        })
    }}>
    <b>Skill:</b><input id='skill'></input>
    <b>Rating:</b><input id='rating'></input>
    <b>Type:</b><input id='type'></input>

    <input type="submit"></input>
    </form>

);

export default AddSkill;