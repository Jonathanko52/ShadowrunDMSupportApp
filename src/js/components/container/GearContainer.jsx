import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Gear from '../presentational/Gear.jsx';


const mapStateToProps = store => ({
  gears: store.addRemove.gearArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeGear(ind))

});

class GearContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.gears.forEach((cur,ind)=>{
        returnArr.push(<Gear ind = {ind}remove={this.props.remove} key={ind} item={cur.item} rating={cur.rating}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Gear</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GearContainer);