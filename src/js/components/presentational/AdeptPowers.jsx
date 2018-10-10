import React from "react";

const AdeptPowers = (props) => (
    <form className = {props.className}>
    <b>Name:</b><input>{props.name}</input>
    <b>Rating:</b><input>{props.rating}</input>
    <b>Notes:</b><input>{props.notes}</input>


   </form>
);

export default Magic;