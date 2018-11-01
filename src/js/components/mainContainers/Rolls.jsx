import React from "react";
import RollsContainer from '../container/RollsContainer.jsx'
import CurrentWeaponContainer from '../container/CurrentWeaponContainer.jsx'


const Rolls = (props) => (
    <div className="PageContainer">
    <p>Rolls</p>
    <CurrentWeaponContainer />
    <RollsContainer />
    </div>
);

export default Rolls;