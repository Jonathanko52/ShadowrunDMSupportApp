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



class IdsLifestyleCurrency extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className='PersonalData'>
          <p className = 'header'><b>Ids / Lifestyles / Currencies</b></p>
          <TextBox name = 'Primary Lifestyle'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'name'
                   curVal = {this.props.personalData.name}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Nuyen'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'metatype'
                   curVal = {this.props.personalData.metatype}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Licenses'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'ethnicity'
                   curVal = {this.props.personalData.ethnicity}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'FakeIds'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'age'
                   curVal = {this.props.personalData.age}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Related Lifestyles'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'age'
                   curVal = {this.props.personalData.age}
                   submitText = {this.props.submitText}/>
          <TextBox name = 'Funds'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'age'
                   curVal = {this.props.personalData.age}
                   submitText = {this.props.submitText}/>

          

        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdsLifestyleCurrency);