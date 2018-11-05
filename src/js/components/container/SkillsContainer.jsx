import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Skill from '../presentational/Skill.jsx';


const mapStateToProps = store => ({
  skills: store.addRemove.skillArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeSkill(ind))

});

class SkillsContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.skills.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<Skill ind = {ind} remove={this.props.remove} key={ind} skill={cur.skill} rating={cur.rating} type={cur.type} />)
      
      });

      return (
        <div className='SkillsContainer'>
        <p className = 'header'><h4>Skills</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);