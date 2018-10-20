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
  // retrieveFromDatabase: (state)=>dispatch(actions.retrieveFromDatabase(state))
  retrieveDatabaseEntry: ()=>dispatch(actions.fetchProducts()),
  setAddRemoveState:(state)=>dispatch(actions.retrieveAndSetAddRemove(state)),
  setAppState:(state)=>dispatch(actions.retrieveAndSetApp(state)),
  setPersonalState:(state)=>dispatch(actions.retrieveAndSetPersonal(state))
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
        {/* <IdsLifestyleCurrency /> */}
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
          let choiceConfirmed = confirm("Are you sure you want to overwrite your previous sheet?")
          if(choiceConfirmed){
            alert("Sheet Save to DB")
            this.props.updateDatabaseEntry(this.props.fullAppState)
          }
        }}>Update Database</button>
        <button onClick = {()=>{
          let choiceConfirmed = confirm("Are you sure you don't want to save your current sheet?")
          if(choiceConfirmed){
            alert("Sheet loaded")
           this.props.retrieveDatabaseEntry()
          }
        }}>Retrieve from Database</button>
          
        <SelectBox />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);