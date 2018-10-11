import React from "react";

const Gear = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Item:</b><input defaultValue = {props.item}></input>
    <b>Rating:</b><input defaultValue= {props.rating}></input>
    <input type="submit" value = "Remove"></input>


   </form>
);

export default Gear;