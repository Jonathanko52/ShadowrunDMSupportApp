import React from "react";

const Quality = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Quality:</b><input defaultValue= {props.quality}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>
    <b>Type:</b><input defaultValue={props.type}></input>

   <input type="submit" value = "Remove"></input>

   </form>
);

export default Quality;