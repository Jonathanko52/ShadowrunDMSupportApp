import React from "react";

const Contacts = (props) => (
    <form className = {props.className}>
    <b>Name:</b><input>{props.name}</input>
    <b>Loyalty:</b><input>{props.loyalty}</input>
    <b>Connection:</b><input>{props.connection}</input>
    <b>Favor:</b><input>{props.favor}</input>



   </form>
);

export default Contacts;