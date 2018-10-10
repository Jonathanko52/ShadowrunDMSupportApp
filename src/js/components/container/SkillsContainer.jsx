import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';
import Skills from './../presentational/Skills.jsx';


const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  savePage: (state)=> dispatch(actions.savePage(state))

});

class SkillsContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {


      return (
        <div className='PersonalData'>
        <p className = 'header'><b>Skills</b></p>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);