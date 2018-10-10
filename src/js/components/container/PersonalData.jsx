import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';

import TextBox from "../presentational/TextBox.jsx"

const mapStateToProps = (store) => {
    return {
    personalData:store.personalData,
    }
  };
  
  const mapDispatchToProps = dispatch => ({

  });



class PersonalData extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className='PersonalData'>
          <p className = 'header'><b>Personal Data</b></p>
          <TextBox name = 'Name/Primary Alias'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'name'
                   curVal = {this.props.personalData.name}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'MetaType'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'metatype'
                   curVal = {this.props.personalData.metatype}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Ethnicity'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'ethnicity'
                   curVal = {this.props.personalData.ethnicity}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Age'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'age'
                   curVal = {this.props.personalData.age}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Sex'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'sex'
                   curVal = {this.props.personalData.sex}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Height'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'height'
                   curVal = {this.props.personalData.height}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Weight'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'weight'
                   curVal = {this.props.personalData.weight}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Street Cred'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'streetCred'
                   curVal = {this.props.personalData.streetCred}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Notoriety'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'notoriety'
                   curVal = {this.props.personalData.notoriety}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Public Awareness'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'publicAwareness'
                   curVal = {this.props.personalData.publicAwareness}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Karma'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'karma'
                   curVal = {this.props.personalData.karma}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Total Karma'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'totalKarma'
                   curVal = {this.props.personalData.totalKarma}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Misc'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'misc'
                   curVal = {this.props.personalData.misc}
                   submitText = {this.props.submitText}/>


        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);