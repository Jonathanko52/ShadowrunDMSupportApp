import React, { Component } from "react";
import { connect } from 'react-redux';
import PersonalData from "./PersonalData.jsx"
import AttributesContainer from "./AttributesContainer.jsx"
import IdsLifestyleCurrency from "./IdsLifestyleCurrency.jsx"
import CoreCombatInfo from "./CoreCombatInfo.jsx"
import * as actions from './../../../action/actions';
import SkillsContainer from './SkillsContainer.jsx';
import MeleeWeaponsContainer from './MeleeWeaponsContainer.jsx'
import RangedWeaponsContainer from './RangedWeaponsContainer.jsx'
import AugmentationContainer from './AugmentationContainer.jsx'
import ArmorContainer from './ArmorContainer.jsx'
import ContactContainer from './ContactContainer.jsx'
import CyberdeckContainer from './CyberdeckContainer.jsx'
import GearContainer from './GearContainer.jsx'
import PowerContainer from './PowerContainer.jsx'
import QualityContainer from './QualityContainer.jsx'
import SpellContainer from './SpellContainer.jsx'
import VehicleContainer from './VehicleContainer.jsx'


import SelectBox from './SelectBox.jsx'



const mapStateToProps = (store) => {
console.log('MAINCONTAINER STORE ACCESS', store)

return {
  fullAppState:{
    ...store.addRemove,
    ...store.app,
    ...store.personalData
  }
}

};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  savePage: (state)=> dispatch(actions.savePage(state)),
  addMeleeWeapon: (data) => dispatch(actions.addMeleeWeapon(data)),
  saveState: (state)=> dispatch(actions.saveState(state))
});


class MainContainer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <p className='test'> Thingy</p>
        <PersonalData />
        <AttributesContainer />
        <IdsLifestyleCurrency />
        <SkillsContainer />
        <MeleeWeaponsContainer />
        <RangedWeaponsContainer />
        <AugmentationContainer />
        <ArmorContainer />
        <ContactContainer />
        <CyberdeckContainer />
        <GearContainer />
        <PowerContainer />
        <QualityContainer />
        <SpellContainer />
        <VehicleContainer />
        <button onClick = {()=>{
          this.props.savePage()
          this.props.saveState(this.props.fullAppState)
          }}>Save Page</button>
        <SelectBox />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);