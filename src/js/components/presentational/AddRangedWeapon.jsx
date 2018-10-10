import React from "react";

const AddRangedWeapon = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            weapon:document.getElementById('weapon').value,
            damage:document.getElementById('damage').value,
            accuracy:document.getElementById('accuracy').value,
            ap:document.getElementById('ap').value,
            mode:document.getElementById('mode').value,
            rc:document.getElementById('rc').value,
            ammo:document.getElementById('ammo').value,
        })
    }}>
    <b>Weapon:</b><input id='weapon'></input>
    <b>Damage:</b><input id='damage'></input>
    <b>Accuracy:</b><input id='accuracy'></input>
    <b>AP:</b><input id='ap'></input>
    <b>Mode:</b><input id='mode'></input>
    <b>RC:</b><input id='rc'></input>
    <b>Ammo:</b><input id='ammo'></input>
    <input type="submit"></input>

   </form>




);

export default AddRangedWeapon;