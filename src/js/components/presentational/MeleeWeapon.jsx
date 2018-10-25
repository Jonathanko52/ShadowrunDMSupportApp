import React from "react";

const MeleeWeapon = (props) => (

    <div>
    <b>Weapon:</b><input defaultValue={props.weapon}></input>
    <b>Reach:</b><input defaultValue={props.reach}></input>
    <b>Damage:</b><input defaultValue={props.damage}></input>
    <b>Accuracy:</b><input defaultValue={props.accuracy}></input>
    <b>AP:</b><input defaultValue={props.ap}></input>
      <button onClick={()=>{props.remove(props.ind)} }>remove</button>
      <button onClick={()=>{props.setToCurrentMelee(props.ind)} }>Set to currenct</button>
   </div>

);

export default MeleeWeapon;