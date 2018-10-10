import React from "react";

const AddVehicle= (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            vehicle:document.getElementById('vehicle').value,
            handling:document.getElementById('handling').value,
            acceleration:document.getElementById('acceleration').value,
            speed:document.getElementById('speed').value,
            pilot:document.getElementById('pilot').value,
            body:document.getElementById('body').value,
            armor:document.getElementById('armor').value,
            sensor:document.getElementById('sensor').value,
            notes:document.getElementById('notes').value,

        })
    }}>
    <b>Vehicle:</b><input id='vehicle'></input>
    <b>Handling:</b><input id='handling'></input>
    <b>Acceleration:</b><input id='acceleration'></input>
    <b>Speed:</b><input id='speed'></input>
    <b>Pilot:</b><input id='pilot'></input>
    <b>Body:</b><input id='body'></input>
    <b>Armor:</b><input id='armor'></input>
    <b>Sensor:</b><input id='sensor'></input>
    <b>Notes:</b><input id='notes'></input>



    <input type="submit"></input>
    </form>

);

export default AddVehicle;