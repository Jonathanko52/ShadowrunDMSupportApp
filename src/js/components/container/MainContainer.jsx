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

return {
  fullAppState:{
    addRemove:store.addRemove,
    app:store.app,
    personalData:store.personalData
  }
}

};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  // savePersonal: (state)=> dispatch(actions.savePersonal(state)),
  updateDatabaseEntry: (state)=> dispatch(actions.updateDatabaseEntry(state)),
  createDatabaseEntry: (state)=>dispatch(actions.createDatabaseEntry(state)),
  retrieveFromDatabase: (state)=>dispatch(actions.retrieveFromDatabase(state))
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
          // this.props.savePersonal()
          console.log("STATE TO BE UPDAT$ED", this.props.fullAppState)
          this.props.updateDatabaseEntry(this.props.fullAppState)
          }}>Update Database</button>
        <button onClick = {()=>{
          // this.props.savePersonal()
          console.log("STATETOBECREATED", this.props.fullAppState)
          this.props.createDatabaseEntry(this.props.fullAppState)
        }}>Create Database Entry</button>
        <button onClick = {()=>{
        this.props.retrieveFromDatabase()
        }}>Retrieve from Database</button>
          
        <SelectBox />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);