import React from "react";

const Contact = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Name:</b><input defaultValue={props.name}></input>
    <b>Loyalty:</b><input defaultValue={props.loyalty}></input>
    <b>Connection:</b><input defaultValue={props.connection}></input>
    <b>Favor:</b><input defaultValue={props.favor}></input>

   <input type="submit" value = "Remove"></input>


   </form>
);

export default Contact;