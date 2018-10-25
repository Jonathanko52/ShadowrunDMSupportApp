import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';


const mapStateToProps = store => ({
    personalData:store.personalData,

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});

class RollsContainer extends React.Component {
    constructor(props) {
      super(props);
    }

  
    render() {

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Initiative Scores:</b></p>
        <p>Physical: {parseInt(this.props.personalData.reaction) + parseInt(this.props.personalData.intuition)}</p>
        {/* <p>Physical: {parseInt(this.props.personalData.reaction) + parseInt(this.props.personalData.intuition)}</p>
        <p>Astral: {parseInt(this.props.personalData.intuition) * 2 }</p>
        <p>Martix:AR: {parseInt(this.props.personalData.reaction) + parseInt(this.props.personalData.intuition)}</p>
        <p>Martix: cold-sim VR: {}</p>
        <p>Martix: hot-sim VR: {}</p>
        <p>Riggin AR: {parseInt(this.props.personalData.reaction) + parseInt(this.props.personalData.intuition)}</p> */}

        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollsContainer);