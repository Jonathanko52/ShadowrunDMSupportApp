import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Power from '../presentational/Power.jsx';


const mapStateToProps = store => ({
  powers: store.addRemove.powerArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removePower(ind))

});

class PowerContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.powers.forEach((cur,ind)=>{
        returnArr.push(<Power ind = {ind} remove={this.props.remove} key={ind} name={cur.name} rating={cur.rating} notes={cur.notes}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><h4>Powers</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerContainer);