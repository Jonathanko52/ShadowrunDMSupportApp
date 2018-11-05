import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import TextBox from '../presentational/TextBox.jsx';

const mapStateToProps = (store) => {
    return {
    personalData:store.personalData,
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    // // create functions that will dispatch action creators\
    savePersonal: (state)=> dispatch(actions.savePersonal(state)),
    submitText: (boxName)=>dispatch(actions.submitText(boxName))
  });


class AttributesContainer extends React.Component {
    constructor() {
      super();
  
    }
  
    render() {
      return (
        <div className = 'Attributes'>
            <p className = 'header'><h4>Attributes</h4></p>
            <div className = "AttributesColumn">
              <TextBox name = 'Body'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'body'
                    curVal = {this.props.personalData.body}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Agility'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'agility'
                    curVal = {this.props.personalData.agility}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Reaction'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'reaction'
                    curVal = {this.props.personalData.reaction}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Strength'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'strength'
                    curVal = {this.props.personalData.strength}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Willpower'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'willpower'
                    curVal = {this.props.personalData.willpower}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Logic'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'logic'
                    curVal = {this.props.personalData.logic}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Intuition'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'intuition'
                    curVal = {this.props.personalData.intuition}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Charisma'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'charisma'
                    curVal = {this.props.personalData.charisma}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Edge'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'edge'
                    curVal = {this.props.personalData.edge}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
            </div>
            <div className = "AttributesColumn">
              <TextBox name = 'Essence'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'essence'
                    curVal = {this.props.personalData.essence}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Magic/Resonance'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'magic'
                    curVal = {this.props.personalData.magic}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'initiative'
                    curVal = {this.props.personalData.initiative}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Matrix Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'matrixInitiative'
                    curVal = {this.props.personalData.matrixInitiative}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Astral Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'astralInitiative'
                    curVal = {this.props.personalData.astralInitiative}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Composure'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'composure'
                    curVal = {this.props.personalData.composure}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Judge Intentions'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'judgeIntentions'
                    curVal = {this.props.personalData.judgeIntentions}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Memory'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'memory'
                    curVal = {this.props.personalData.memory}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Lift/Carry'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'lift'
                    curVal = {this.props.personalData.lift}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Movement'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'movement'
                    curVal = {this.props.personalData.movement}
                    savePersonal = {this.props.savePersonal}
                    submitText = {this.props.submitText}/>
            </div>
                   


        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AttributesContainer);