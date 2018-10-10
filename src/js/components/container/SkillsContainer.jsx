import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';
import Skills from './../presentational/Skills.jsx';


const mapStateToProps = store => ({
  skills: store.skills
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
      let returnArr = [];
      console.log(this.props.skills)
      this.props.skills.skillsArray.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<Skills key={ind} skill={cur.skill} rating={cur.rating} />)
      
      });

      return (
        <div className='PersonalData'>
        <p className = 'header'><b>Skills</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);