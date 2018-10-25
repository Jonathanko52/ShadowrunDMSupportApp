import React from "react";

const Armor = (props) => (
    <div>
    <b>Armor:</b><input defaultValue={props.armor}></input>
    <b>Rating:</b><input defaultValue={props.rating}></input>
    <b>Notes:</b><input defaultValue={props.notes}></input>

      <button onClick={()=>{props.remove(props.ind)} }>remove</button>
      <button onClick={()=>{props.setToCurrentArmor(props.ind)} }>Set to current</button>

   </div>
);

export default Armor;