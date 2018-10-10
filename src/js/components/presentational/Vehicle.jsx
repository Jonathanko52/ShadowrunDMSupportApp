import React from "react";

const Vehicle = (props) => (
    <form className = {props.className}>
    <b>Vehicle:</b><input>{props.vehicle}</input>
    <b>Handling:</b><input>{props.handling}</input>
    <b>Acceleration:</b><input>{props.acceleration}</input>
    <b>Speed:</b><input>{props.speed}</input>
    <b>Pilot:</b><input>{props.pilot}</input>
    <b>Body:</b><input>{props.body}</input>
    <b>Armor:</b><input>{props.armor}</input>
    <b>Sensor:</b><input>{props.sensor}</input>
    <b>Notes:</b><input>{props.notes}</input>

   </form>
);

export default Vehicle;