import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import RangedWeapon from '../presentational/RangedWeapon.jsx';


const mapStateToProps = store => ({
  rangedWeapons: store.addRemove.rangedWeaponArray
});

const mapDispatchToProps = dispatch => ({
  remove: (ind)=>dispatch(actions.removeRangedWeapon(ind)),
  setToCurrentRanged: (ind)=>dispatch(actions.setToCurrentRanged(ind))
});

class RangedWeaponsContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.rangedWeapons.forEach((cur,ind)=>{
        returnArr.push(<RangedWeapon ind = {ind} setToCurrentRanged={this.props.setToCurrentRanged} remove={this.props.remove} ind = {ind} key={ind} weapon={cur.weapon} damage={cur.damage} accuracy={cur.accuracy} ap={cur.ap} mode={cur.mode} rc={cur.rc} ammo={cur.ammo}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><h4>RangedWeapons</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RangedWeaponsContainer);