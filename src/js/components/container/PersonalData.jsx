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
      savePersonal: (state)=> dispatch(actions.savePersonal(state)),

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
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'MetaType'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'metatype'
                   curVal = {this.props.personalData.metatype}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Ethnicity'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'ethnicity'
                   curVal = {this.props.personalData.ethnicity}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Age'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'age'
                   curVal = {this.props.personalData.age}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Sex'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'sex'
                   curVal = {this.props.personalData.sex}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Height'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'height'
                   curVal = {this.props.personalData.height}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Weight'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'weight'
                   curVal = {this.props.personalData.weight}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Street Cred'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'streetCred'
                   curVal = {this.props.personalData.streetCred}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Notoriety'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'notoriety'
                   curVal = {this.props.personalData.notoriety}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Public Awareness'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'publicAwareness'
                   curVal = {this.props.personalData.publicAwareness}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Karma'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'karma'
                   curVal = {this.props.personalData.karma}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Total Karma'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'totalKarma'
                   curVal = {this.props.personalData.totalKarma}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Misc'
                   boxSize = '10'
                   boxClass = 'personalDataText'
                   storeVal = 'misc'
                   curVal = {this.props.personalData.misc}
                   savePersonal = {this.props.savePersonal}
                   submitText = {this.props.submitText}/>


        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);