import React from "react";

const Gear = (props) => (
    <form className = {props.className}>
    <b>Item:</b><input>{props.item}</input>
    <b>Rating:</b><input>{props.rating}</input>


   </form>
);

export default Gear;