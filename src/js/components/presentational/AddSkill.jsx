import React from "react";

const AddSkill = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        let type
        if(document.getElementById('typea').checked){
            type = 'active'
        } else if (document.getElementById('typek').checked){
            type = 'knowledge'
        } else {
            type = 'unselected'
        }
        props.addAction({
            skill:document.getElementById('skill').value,
            rating:document.getElementById('rating').value,
            type:type

        })
    }}>
    <b>Skill:</b><input id='skill'></input>
    <b>Rating:</b><input id='rating'></input>
    <b>Type:</b>
    
    Active<input name='quality' type="radio" id="typea" value="active"></input>
    Knowledge<input name='quality' type="radio" id="typek" value="knowledge"></input>

    <input type="submit"></input>
    </form>

);

export default AddSkill;