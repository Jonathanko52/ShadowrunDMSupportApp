import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Cyberdeck from '../presentational/Cyberdeck.jsx';


const mapStateToProps = store => ({
  cyberdecks: store.addRemove.cyberdeckArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeCyberdeck(ind))

});

class CyberdeckContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.cyberdecks.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<Cyberdeck ind = {ind} remove={this.props.remove} key={ind} model={cur.model} attack={cur.attack} sleaze={cur.sleaze} rating={cur.rating}
        processing={cur.processing} firewall={cur.firewall} programs={cur.programs}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><h4>Cyberdeck</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CyberdeckContainer);