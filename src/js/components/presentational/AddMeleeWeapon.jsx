import React from "react";

const MeleeWeapon = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            weapon:document.getElementById('weapon').value,
            reach:document.getElementById('reach').value,
            damage:document.getElementById('damage').value,
            accuracy:document.getElementById('accuracy').value,
            ap:document.getElementById('ap').value
        })
    }}>
    <b>Weapon:</b><input id='weapon'></input>
    <b>Reach:</b><input id='reach'></input>
    <b>Damage:</b><input id='damage'></input>
    <b>Accuracy:</b><input id='accuracy'></input>
    <b>AP:</b><input id='ap'></input>
    <input type="submit"></input>
    </form>

);

export default MeleeWeapon;