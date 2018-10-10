import React from "react";

const Skills = (props) => (
    <form className = {props.className}>
    <b>Skill:</b><input defaultValue={props.skill}></input>
    <b>Rating:</b><input defaultValue={props.rating}></input>
    <b>Type:</b>
    Active<input type="radio" id="type" value="active"></input>
    Knowledge<input type="radio" id="type" value="knowledge"></input>


   </form>
);

export default Skills;