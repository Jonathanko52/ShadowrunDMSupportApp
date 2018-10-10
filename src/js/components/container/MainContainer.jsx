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

import SelectBox from './SelectBox.jsx'


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  savePage: (state)=> dispatch(actions.savePage(state)),
  addMeleeWeapon: (data) => dispatch(actions.addMeleeWeapon(data))

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
        <button onClick = {this.props.savePage}>Save Page</button>
        <SelectBox />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);