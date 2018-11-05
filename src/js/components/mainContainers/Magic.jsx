import React from "react";
import Spells from '../container/SpellContainer.jsx'
import Powers from '../container/PowerContainer.jsx'


const SpellsAndPowers = (props) => (
    <div className='displayedpage'>
    <h4>Magic</h4>
    <Spells />
    <Powers />
    </div>
);

export default SpellsAndPowers;