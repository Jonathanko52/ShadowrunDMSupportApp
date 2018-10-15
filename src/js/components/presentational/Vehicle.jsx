import React from "react";

const Vehicle = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Vehicle:</b><input defaultValue={props.vehicle}></input>
    <b>Handling:</b><input defaultValue={props.handling}></input>
    <b>Acceleration:</b><input defaultValue={props.acceleration}></input>
    <b>Speed:</b><input defaultValue={props.speed}></input>
    <b>Pilot:</b><input defaultValue={props.pilot}></input>
    <b>Body:</b><input defaultValue={props.body}></input>
    <b>Armor:</b><input defaultValue={props.armor}></input>
    <b>Sensor:</b><input defaultValue={props.sensor}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>
    <input type="submit" defaultValue = "Remove"></input>

   </form>
);

export default Vehicle;