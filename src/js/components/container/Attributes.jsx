import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';

const mapStateToProps = (store) => {
    return {
    personalData:store.personalData,
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    // // create functions that will dispatch action creators
    submitText: (boxName)=>dispatch(actions.submitText(boxName))

  });


class Attributes extends Component {
    constructor() {
      super();
  
    }
  
    render() {
      return (
        <div>
            <p className = 'header'><b>Attributes</b></p>


        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Attributes);