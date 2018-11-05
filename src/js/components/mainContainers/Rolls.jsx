import React from "react";
import RollsContainer from '../container/RollsContainer.jsx'
import CurrentWeaponContainer from '../container/CurrentWeaponContainer.jsx'


const Rolls = (props) => (
    <div className='displayedpage'>
    <h4>Rolls</h4>
    <CurrentWeaponContainer />
    <RollsContainer />
    </div>
);

export default Rolls;