import React from "react";

const Cyberdeck = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Model:</b><input defaultValue={props.model}></input>
    <b>Attack:</b><input defaultValue={props.attack}></input>
    <b>Sleaze:</b><input defaultValue={props.sleaze}></input>
    <b>Device Rating:</b><input defaultValue={props.rating}></input>
    <b>Data Processing:</b><input defaultValue={props.processing}></input>
    <b>Firewall:</b><input defaultValue={props.firewall}></input>
    <b>Programs:</b><input defaultValue={props.programs}></input>
    
    <input type="submit" value = "Remove"></input>


   </form>
);

export default Cyberdeck;