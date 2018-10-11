import React from "react";

const Augmentations = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Augmentation:</b><input defaultValue={props.augmentation}></input>
    <b>Rating:</b><input defaultValue={props.rate}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>
    <b>Essence:</b><input defaultValue={props.essence}></input>
    
    <input type="submit" value = "Remove"></input>

   </form>
);

export default Augmentations;