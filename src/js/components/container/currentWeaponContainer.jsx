import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';


const mapStateToProps = store => ({
  meleeWeapons: store.addRemove.meleeWeaponArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeMeleeWeapon(ind))

});

class CurrentWeaponContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.meleeWeapons.forEach((cur,ind)=>{
        returnArr.push(<MeleeWeapon ind = {ind} remove={this.props.remove} key={ind} weapon={cur.weapon} reach={cur.reach} damage={cur.damage} accuracy={cur.accuracy} ap={cur.ap} />)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Melee Weapons</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeaponContainer);