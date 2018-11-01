import React, { Component } from "react";
import { connect } from 'react-redux';
import IdsLifestyleCurrency from "../container/IdsLifestyleCurrency.jsx"
import CoreCombatInfo from "../container/CoreCombatInfo.jsx"
import * as actions from '../../../action/actions';
import Equipment from './Equipment.jsx'
import General from './General.jsx'
import Magic from './Magic.jsx'
import Skills from './Skills.jsx'
import Rolls from './Rolls.jsx'

import {Link, Route} from 'react-router-dom';



import SelectBox from '../container/SelectBox.jsx'



const mapStateToProps = (store) => {

return {
  fullAppState:{
    addRemove:store.addRemove,
    app:store.app,
    personalData:store.personalData
  }
}

};

const mapDispatchToProps = dispatch => ({
  updateDatabaseEntry: (state)=> dispatch(actions.updateDatabaseEntry(state)),
  createDatabaseEntry: (state)=>dispatch(actions.createDatabaseEntry(state)),
  retrieveDatabaseEntry: ()=>dispatch(actions.retrieveDatabaseEntry()),
  setAddRemoveState:(state)=>dispatch(actions.retrieveAndSetAddRemove(state)),
  setAppState:(state)=>dispatch(actions.retrieveAndSetApp(state)),
  setPersonalState:(state)=>dispatch(actions.retrieveAndSetPersonal(state))
});


class MainContainer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='Page'>
        <div className='NavigationBar'>
            <div>
              <nav>
                <Link to="/general">GENERAL TAB</Link>          
              </nav>
            </div>
            <div>
              <nav>
                <Link to="/equipment">EQUIPMENT</Link>
              </nav>
            </div>
            <div>
              <nav>
                <Link to="/skills">SKILLS</Link>
              </nav>
            </div>
            <div>
              <nav>
                <Link to="/magic">MAGIC</Link>
              </nav>
            </div>
            <div>
              <nav>
                <Link to="/rolls">ROLLS</Link>
              </nav>
            </div>
        </div>
        
        <div>
          <Route path='/general' component = {General} /> 
          <Route path="/equipment" component = {Equipment} /> 
          <Route path="/skills" component = {Skills} /> 
          <Route path="/magic" component = {Magic} /> 
          <Route path="/rolls" component = {Rolls} /> 
        </div>
        <div>
          <button onClick = {()=>{
            let choiceConfirmed = confirm("Are you sure you want to overwrite your previous sheet?")
            if(choiceConfirmed){
              alert("Sheet Save to DB")
              this.props.updateDatabaseEntry(this.props.fullAppState)
            }
          }}>Save to Database</button>
          <button onClick = {()=>{
            let choiceConfirmed = confirm("Are you sure you don't want to save your current sheet?")
            if(choiceConfirmed){
              alert("Sheet loaded")
            this.props.retrieveDatabaseEntry()
            }
          }}>Retrieve from Database</button>
        </div>
        <SelectBox />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);