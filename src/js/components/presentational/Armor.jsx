import React from "react";

const Armor = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Armor:</b><input defaultValue={props.armor}></input>
    <b>Rating:</b><input defaultValue={props.rating}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>

   <input type="submit" value = "Remove"></input>

   </form>
);

export default Armor;