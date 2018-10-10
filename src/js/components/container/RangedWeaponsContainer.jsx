import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import RangedWeapon from '../presentational/RangedWeapon.jsx';


const mapStateToProps = store => ({
  rangedWeapons: store.addRemove.rangedWeaponArray
});

const mapDispatchToProps = dispatch => ({


});

class MeleeWeaponsContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      console.log(this.props)
      this.props.rangedWeapons.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<RangedWeapon key={ind} weapon={cur.weapon} damage={cur.damage} accuracy={cur.accuracy} ap={cur.ap} mode={cur.mode} rc={cur.rc} ammo={cur.ammo}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>RangedWeapons</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeleeWeaponsContainer);