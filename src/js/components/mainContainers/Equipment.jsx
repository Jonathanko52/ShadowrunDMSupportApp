import React from "react";
import Armor from '../container/ArmorContainer.jsx'
import Cyberdeck from '../container/CyberdeckContainer.jsx'
import Gear from '../container/GearContainer.jsx'
import MeleeWeapon from '../container/MeleeWeaponsContainer.jsx'
import RangedWeapon from '../container/RangedWeaponsContainer.jsx'
import Vehicle from '../container/VehicleContainer.jsx'

const Equipment = (props) => (
    <div className='displayedpage'>
    <h4>EQUIPMENT</h4>
    <Armor />
    <Cyberdeck />
    <Gear />
    <MeleeWeapon />
    <RangedWeapon />
    <Vehicle />
    </div>
);

export default Equipment;