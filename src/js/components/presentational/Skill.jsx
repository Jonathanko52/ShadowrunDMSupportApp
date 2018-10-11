import React from "react";

const Skills = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Skill:</b><input defaultValue={props.skill}></input>
    <b>Rating:</b><input defaultValue={props.rating}></input>
    <b>Type:</b><input defaultValue={props.type}></input>

   <input type="submit" value = "Remove"></input>

   </form>
);

export default Skills;