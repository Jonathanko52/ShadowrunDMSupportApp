import React from "react";

const Armor = (props) => (
    <form className = {props.className}>
    <b>Armor:</b><input>{props.armor}</input>
    <b>Rating:</b><input>{props.rating}</input>
    <b>Notes:</b><input>{props.notes}</input>


   </form>
);

export default Armor;