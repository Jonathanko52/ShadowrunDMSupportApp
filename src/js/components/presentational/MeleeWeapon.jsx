import React from "react";

const MeleeWeapon = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.remove(props.ind)

        }}>
    <b>Weapon:</b><input defaultValue={props.weapon}></input>
    <b>Reach:</b><input defaultValue={props.reach}></input>
    <b>Damage:</b><input defaultValue={props.damage}></input>
    <b>Accuracy:</b><input defaultValue={props.accuracy}></input>
    <b>AP:</b><input defaultValue={props.ap}></input>

   <input type="submit" value = "Remove"></input>

   </form>
);

export default MeleeWeapon;