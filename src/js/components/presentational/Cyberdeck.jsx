import React from "react";

const Cyberdeck = (props) => (
    <form className = {props.className}>
    <b>Model:</b><input>{props.model}</input>
    <b>Attack:</b><input>{props.attack}</input>
    <b>Sleaze:</b><input>{props.sleaze}</input>
    <b>Device Rating:</b><input>{props.rating}</input>
    <b>Data Processing:</b><input>{props.processing}</input>
    <b>Firewall:</b><input>{props.firewall}</input>
    <b>Programs:</b><input>{props.programs}</input>
    


   </form>
);

export default Cyberdeck;