import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import MeleeWeapon from '../presentational/MeleeWeapon.jsx';


const mapStateToProps = store => ({
  meleeWeapons: store.addRemove.meleeWeaponArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  savePage: (state)=> dispatch(actions.savePage(state))

});

class MeleeWeaponsContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      console.log(this.props)
      this.props.meleeWeapons.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<MeleeWeapon key={ind} weapon={cur.weapon} reach={cur.reach} damage={cur.damage} accuracy={cur.accuracy} ap={cur.ap} />)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Melee Weapons</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeleeWeaponsContainer);