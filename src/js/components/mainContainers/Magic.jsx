import React from "react";
import Spells from '../container/SpellContainer.jsx'
import Powers from '../container/PowerContainer.jsx'


const SpellsAndPowers = (props) => (
    <div>
    <p>Magic</p>
    <p>Spells and Powers</p>
    <Spells />
    <Powers />
    </div>
);

export default SpellsAndPowers;