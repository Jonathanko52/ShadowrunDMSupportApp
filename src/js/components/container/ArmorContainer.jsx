import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Armor from '../presentational/Armor.jsx';


const mapStateToProps = store => ({
  armors: store.addRemove.armorArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeArmor(ind)),
  setToCurrentArmor: (ind) =>dispatch(actions.setToCurrentArmor(ind)) 
});

class ArmorContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.armors.forEach((cur,ind)=>{
        returnArr.push(<Armor ind = {ind} setToCurrentArmor={this.props.setToCurrentArmor} remove={this.props.remove} key={ind} armor={cur.armor} rating={cur.rating} notes={cur.notes}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Armors</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorContainer);