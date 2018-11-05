import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Quality from '../presentational/Quality.jsx';


const mapStateToProps = store => ({
  qualities: store.addRemove.qualityArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeQuality(ind))

});

class PowerContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.qualities.forEach((cur,ind)=>{
        returnArr.push(<Quality ind = {ind} remove={this.props.remove} key={ind} quality={cur.quality} notes={cur.notes} type={cur.type}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><h4>Qualities</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerContainer);