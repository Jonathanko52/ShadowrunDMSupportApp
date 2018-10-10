import React from "react";

const Augmentations = (props) => (
    <form className = {props.className}>
    <b>Augmentation:</b><input>{props.augmentations}</input>
    <b>Rating:</b><input>{props.rate}</input>
    <b>Notes:</b><input>{props.notes}</input>
    <b>Essence:</b><input>{props.essence}</input>
    

   </form>
);

export default Augmentations;