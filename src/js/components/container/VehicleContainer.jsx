import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Vehicle from '../presentational/Vehicle.jsx';


const mapStateToProps = store => ({
  vehicles: store.addRemove.vehicleArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeVehicle(ind))

});

class VehicleContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.vehicles.forEach((cur,ind)=>{
        returnArr.push(<Vehicle key={ind}
        ind = {ind}
        remove={this.props.remove}
        vehicle={cur.vehicle}
        handling={cur.handling}
        acceleration={cur.acceleration}
        speed={cur.speed}
        pilot={cur.pilot}
        body={cur.body}
        armor={cur.armor}
        sensor={cur.sensor}
        notes={cur.notes}
        />)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Vehicles</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);