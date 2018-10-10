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
    // // create functions that will dispatch action creators
    submitText: (boxName)=>dispatch(actions.submitText(boxName))
  });


class AttributesContainer extends React.Component {
    constructor() {
      super();
  
    }
  
    render() {
      return (
        <div className = 'Attributes'>
            <p className = 'header'><b>Attributes</b></p>
            <div className = "AttributesColumn">
              <TextBox name = 'Body'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Agility'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Reaction'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Strength'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Willpower'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Logic'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Intuition'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Charisma'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Edge'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
            </div>
            <div className = "AttributesColumn">
              <TextBox name = 'Essence'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Magic/Resonance'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Matrix Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Astral Initiative'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Composure'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Judge Intentions'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Memory'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Lift/Carry'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
              <TextBox name = 'Movement'
                    boxSize = '10'
                    boxProps = 'personalDataText'
                    storeVal = 'misc'
                    curVal = {this.props.personalData.misc}
                    submitText = {this.props.submitText}/>
            </div>
                   


        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AttributesContainer);