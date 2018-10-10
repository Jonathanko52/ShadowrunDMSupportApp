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
  rangedWeapon: (data) => dispatch(actions.addRangedWeapon(data))
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
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Add An Item</b></p>
        <select id="BoxSelect" onChange={this.handleChange}>
          <option value="meleeWeapon">Melee Weapon</option>
          <option value="rangedWeapon">Ranged Weapon</option>
        </select>
        <AddBox box={this.props.boxDisplay} adds={this.props.adds}></AddBox>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);