import React from "react";

const MeleeWeapon = (props) => (
    <form className = {props.className}>
    <b>Weapon:</b><input defaultValue={props.weapon}></input>
    <b>Reach:</b><input defaultValue={props.reach}></input>
    <b>Damage:</b><input defaultValue={props.damage}></input>
    <b>Accuracy:</b><input defaultValue={props.accuracy}></input>
    <b>AP:</b><input defaultValue={props.ap}></input>


   </form>
);

export default MeleeWeapon;