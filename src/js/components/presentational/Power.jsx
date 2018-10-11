import React from "react";

const Power = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Name:</b><input defaultValue={props.name}></input>
    <b>Rating:</b><input defaultValue={props.rating}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>

   <input type="submit" value = "Remove"></input>

   </form>
);

export default Power;