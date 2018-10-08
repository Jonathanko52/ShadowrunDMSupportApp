import React, { Component } from "react";
import { connect } from 'react-redux';
import PersonalData from "./PersonalData.jsx"
import Attributes from "./Attributes.jsx"
import IdsLifestyleCurrency from "./IdsLifestyleCurrency.jsx"
import CoreCombatInfo from "./CoreCombatInfo.jsx"
import * as actions from './../../../action/actions';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  savePage: (state)=> dispatch(actions.savePage(state))

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
        <Attributes />
        <IdsLifestyleCurrency />
        <CoreCombatInfo />
        <button onClick = {this.props.savePage}>Save Page</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);