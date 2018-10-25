import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';


const mapStateToProps = store => ({
  curMeleeWeapon: store.addRemove.curMeleeWeapon,
  curRangedWeapon: store.addRemove.curRangedWeapon,
  curSpell: store.addRemove.curSpell,
  curArmor: store.addRemove.curArmor,

});

const mapDispatchToProps = dispatch => ({

});

class CurrentWeaponContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // console.log("CURRENT MELEE WEAPON IN ")
      let returnArr = [];
      if(this.props.curMeleeWeapon){
        returnArr.push(
          <div className='WeaponsContainer'>
            <p className = 'header'><b>Current Melee Weapon</b></p>
            <p>Weapon Name: {this.props.curMeleeWeapon.weapon}</p> 
            <p>Weapon Reach: {this.props.curMeleeWeapon.reach} </p>
            <p>Weapon Damage: {this.props.curMeleeWeapon.damage} </p>
            <p>Weapon Accuracy: {this.props.curMeleeWeapon.accuracy} </p>
            <p>Weapon AP: {this.props.curMeleeWeapon.ap}</p>
          </div>
        )}
      if(this.props.curRangedWeapon){
        returnArr.push(
          <div className='WeaponsContainer'>
            <p className = 'header'><b>Current Ranged Weapon</b></p>
            <p>Weapon:{this.props.weapon}</p>
            <p>Damage:{this.props.damage}</p>
            <p>Accuracy:{this.props.accuracy}</p>
            <p>AP:{this.props.ap}</p>
            <p>Mode:{this.props.mode}</p>
            <p>RC:{this.props.rc}</p>
            <p>Ammo:{this.props.ammo}</p>
          </div>
      )}  

        if(this.props.curSpell){
          returnArr.push(
            <div className='WeaponsContainer'>
              <p className = 'header'><b>Current Spell</b></p>
              <p>Spell/Power/Ritual/ComplexForm: {this.props.spell}</p>
              <p>Type/Target: {this.props.type}</p>
              <p>Range: {this.props.range}</p>
              <p>Duration: {this.props.duration}</p>
              <p>Drain: {this.props.drain}</p>
            </div>
        )}  

        if(this.props.curArmor){
          returnArr.push(
            <div className='WeaponsContainer'>
              <p className = 'header'><b>Current Spell</b></p>
              <p>Armor {this.props.curArmor.armor}</p> 
              <p>Rating: {this.props.curArmor.rating} </p>                
              <p>Notes: {this.props.curArmor.notes} </p>
            </div>
        )}  

      return (
        <div>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeaponContainer);