import React from "react";

const RangedWeapon = (props) => (
    <form className = {props.className}>
    <b>Weapon:</b><input>{props.weapon}</input>
    <b>Damage:</b><input>{props.damage}</input>
    <b>Accuracy:</b><input>{props.accuracy}</input>
    <b>AP:</b><input>{props.ap}</input>
    <b>Mode:</b><input>{props.mode}</input>
    <b>RC:</b><input>{props.rc}</input>
    <b>Ammo:</b><input>{props.ammo}</input>


   </form>
);

export default RangedWeapon;