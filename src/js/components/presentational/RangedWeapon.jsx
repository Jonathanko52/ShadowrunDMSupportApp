import React from "react";

const RangedWeapon = (props) => (
    <div>
    <b>Weapon:</b><input defaultValue={props.weapon}></input>
    <b>Damage:</b><input defaultValue={props.damage}></input>
    <b>Accuracy:</b><input defaultValue={props.accuracy}></input>
    <b>AP:</b><input defaultValue={props.ap}></input>
    <b>Mode:</b><input defaultValue={props.mode}></input>
    <b>RC:</b><input defaultValue={props.rc}></input>
    <b>Ammo:</b><input defaultValue={props.ammo}></input>

      <button onClick={()=>{props.remove(props.ind)} }>remove</button>
      <button onClick={()=>{props.setToCurrentRanged(props.ind)} }>Set to current</button>

   </div>
 
);

export default RangedWeapon;