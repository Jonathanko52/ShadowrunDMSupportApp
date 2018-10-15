import React, { Component } from "react";
import { connect } from 'react-redux';
import AddBox from './../presentational/AddBox.jsx'
import * as actions from './../../../action/actions'

const mapStateToProps = store => ({
  boxDisplay: store.app.boxDisplay
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  boxChange: (state) => dispatch(actions.boxChange(state)),
  adds:{
  meleeWeapon: (data) => dispatch(actions.addMeleeWeapon(data)),
  rangedWeapon: (data) => dispatch(actions.addRangedWeapon(data)),
  armor: (data) => dispatch(actions.addArmor(data)),
  augmentation: (data) => dispatch(actions.addAugmentation(data)),
  contact: (data) => dispatch(actions.addContact(data)),
  cyberdeck: (data) => dispatch(actions.addCyberdeck(data)),
  gear: (data) => dispatch(actions.addGear(data)),
  power: (data) => dispatch(actions.addPower(data)),
  quality: (data) => dispatch(actions.addQuality(data)),
  skill: (data) => dispatch(actions.addSkill(data)),
  spell: (data) => dispatch(actions.addSpell(data)),
  vehicle: (data) => dispatch(actions.addVehicle(data)),

  }
});

class SelectBox extends Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
      event.preventDefault();
      // console.log('CHANGE', document.getElementById('BoxSelect').value)
      this.props.boxChange(document.getElementById('BoxSelect').value)
    }
  
    render() {
      return (
        <div className='AddBox'>
        <p className = 'header'><b>Add An Item</b></p>
        <select id="BoxSelect" onChange={this.handleChange}>
        <option value="meleeWeapon">Melee Weapon</option>
        <option value="armor">Armor</option>
        <option value="augmentation">Augmentation</option>
        <option value="contact">Contact</option>
        <option value="cyberdeck">Cyberdeck</option>
        <option value="gear">Gear</option>
        <option value="power">Power</option>
        <option value="quality">Quality</option>
        <option value="rangedWeapon">Ranged Weapon</option>
        <option value="skill">Skill</option>
        <option value="spell">Spell</option>
        <option value="vehicle">Vehicle</option>

        </select>
        <AddBox box={this.props.boxDisplay} adds={this.props.adds}></AddBox>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);